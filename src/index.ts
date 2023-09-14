import './main.scss';
import { Article } from './ts/Article'
import { ArticleModal } from './ts/ArticleModal';
import { Modal } from './ts/Modal';


const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './images/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './images/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './images/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    }
];

interface IData {
    id: number;
    title: string;
    urlToImage: string;
    tags: Array<string>;
    content: string;
    date: string;
}

window.onload = function() {
    console.log('Hello Rolling Scopes!');

   // Render Articles
    if(data) {
        renderArticlesToDom();
    }

    // Tags
    addTagsClickHandler();

    // Generate Base Modal from Modal Class
    addToolsClickHandler();
}

const addTagsClickHandler = () => {
    (document.querySelector('.strategies__tags') as HTMLDivElement).addEventListener('click', (e) => {
        if ((e.target as HTMLDivElement).classList.contains('tag')) {
            const clickedTag = e.target as HTMLDivElement;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if ((clickedTag as HTMLDivElement).innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
        }
    })
}

const removeSelectedTags = () => {
    const tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickedTag = (clickedTag: HTMLDivElement) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    const strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag: string) => {
    const strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if ((tag as HTMLSpanElement
                ).innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const renderArticlesToDom = () => {
    const strategiesWrapper = getStrategiesWrapper();

    generateArticles(data).forEach(article => {
        strategiesWrapper.append(article.generateArticle());
    })

    addStrategyClickHandler();
}

const getStrategiesWrapper = () => {
    const strategiesConstainer = document.querySelector('.strategy-wrapper') as HTMLDivElement;
    strategiesConstainer.innerHTML = '';
    return strategiesConstainer
}

const generateArticles = (data: Array<IData>) => {
    const articles: Array<Article> = [];
    data.forEach(article => {
        articles.push(new Article(article))
    });
    return articles;
}

const addToolsClickHandler = () => {
    (document.querySelector('.tools__button .button') as HTMLButtonElement).addEventListener('click', () => {
        generateToolsModal();
    })
}

const generateToolsModal = () => {
    renderModalWindow('Test content for Tools Modal');
}

const renderModalWindow = (content: string) => {
    const modal =  new Modal ('tools-modal');
    modal.buildModal(content);
}

const addStrategyClickHandler = () => {
    (document.querySelector('.strategy-wrapper') as HTMLDivElement).addEventListener('click', (e) => {
        if ((e.target as HTMLDivElement).closest('.strategy')) {
            const clickedStrategyId = ((e.target as HTMLDivElement).closest('.strategy') as HTMLElement).getAttribute('data-id');
            const clickedStrategyData = getClickedData(clickedStrategyId);
            renderArticleModalWindow(clickedStrategyData!);
        }
    })
}

const getClickedData = (id: string|null) => {
    return data.find(article => article.id == Number(id))
}

const renderArticleModalWindow = (article: IData) => {
    const modal =  new ArticleModal ('article-modal', article);
    modal.renderModal();
}