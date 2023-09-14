import { Modal } from './Modal';

interface IData {
    id: number;
    title: string;
    urlToImage: string;
    tags: Array<string>;
    content: string;
    date: string;
}

export class ArticleModal extends Modal {
    id: number;
    title: string;
    urlToImage: string;
    tags: Array<string>; 
    content: string;
    date: string;

    constructor (classes: string,  obj: IData) {
        super(classes);
        this.id = obj.id;
        this.title = obj.title;
        this.urlToImage = obj.urlToImage;
        this.tags = obj.tags;
        this.content = obj.content;
        this.date = obj.date;
    }

    // Article Modal generator
    generateContent() {
        let template = '';
        const article = document.createElement('div');
        article.className = 'article-modal__content';

        this.urlToImage && 
        (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

        if (this.title || this.tags || this.content || this.date) {
            template += `<div class="strategy__content">`

            this.date && 
            (template += `<p class="strategy__date">${this.date}</p>`)

            this.title && 
            (template += `<h3 class="strategy__name">${this.title}</h3>`)

            this.content && 
            (template += `<p class="strategy__text">${this.content}</p>`)

            if(this.tags) {
                template += `<div class="strategy__tags tags">`

                this.tags.map(tag => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })

                template += `</div>`
            }

            template += `</div>`
        }

        article.innerHTML = template;
        return article;
    }

    renderModal() {
        const content = this.generateContent();
        console.log(content);
        super.buildModal(content);
    }
}