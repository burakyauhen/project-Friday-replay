export class Article {
    id: number;
    title: string;
    urlToImage: string;
    tags: Array<string>;
    constructor(card: { id: number, title: string, urlToImage: string, tags: Array<string>}) {
        this.id = card.id;
        this.title = card.title;
        this.urlToImage = card.urlToImage;
        this.tags = card.tags;
    }

    // Article generator
    generateArticle() {
        let template = '';
        const article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', `${this.id}`);

        this.urlToImage && 
        (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

        if (this.title || this.tags) {
            template += `<div class="strategy__content">`

            this.title && 
            (template += `<h3 class="strategy__name">${this.title}</h3>`)

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
}