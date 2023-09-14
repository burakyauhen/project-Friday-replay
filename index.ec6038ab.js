/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/ts/Article.ts
var Article = /** @class */ (function () {
    function Article(card) {
        this.id = card.id;
        this.title = card.title;
        this.urlToImage = card.urlToImage;
        this.tags = card.tags;
    }
    // Article generator
    Article.prototype.generateArticle = function () {
        var template = '';
        var article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', "".concat(this.id));
        this.urlToImage &&
            (template += "<img class=\"strategy__image\" src=".concat(this.urlToImage, " alt=\"strategy\">"));
        if (this.title || this.tags) {
            template += "<div class=\"strategy__content\">";
            this.title &&
                (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
            if (this.tags) {
                template += "<div class=\"strategy__tags tags\">";
                this.tags.map(function (tag) {
                    template += "<span class=\"tag tag_colored\">".concat(tag, "</span>");
                });
                template += "</div>";
            }
            template += "</div>";
        }
        article.innerHTML = template;
        return article;
    };
    return Article;
}());


;// CONCATENATED MODULE: ./src/ts/Modal.ts
var Modal = /** @class */ (function () {
    function Modal(classes) {
        this.classes = classes;
        this.overlay = this.createDomNode('div', 'overlay', 'overlay_modal');
        this.modal = this.createDomNode('div', 'modal', this.classes);
        this.modalContent = this.createDomNode('div', 'modal__content');
        this.modalCloseBtn = this.createDomNode('span', 'modal__close-icon');
    }
    Modal.prototype.buildModal = function (content) {
        this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>';
        this.setContent(content);
        this.appendModalElements();
        // Bind Events
        this.bindEvents();
        // Open Modal
        this.openModal();
    };
    Modal.prototype.createDomNode = function (nodeStr) {
        var _a;
        var classes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classes[_i - 1] = arguments[_i];
        }
        var node = document.createElement(nodeStr);
        (_a = node.classList).add.apply(_a, classes);
        return node;
    };
    Modal.prototype.setContent = function (content) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        }
        else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    };
    Modal.prototype.appendModalElements = function () {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    };
    Modal.prototype.bindEvents = function () {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    };
    Modal.prototype.openModal = function () {
        document.body.append(this.overlay);
    };
    Modal.prototype.closeModal = function (e) {
        var classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
            if (document.querySelector('.overlay')) {
                document.querySelector('.overlay').remove();
            }
        }
    };
    return Modal;
}());


;// CONCATENATED MODULE: ./src/ts/ArticleModal.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArticleModal = /** @class */ (function (_super) {
    __extends(ArticleModal, _super);
    function ArticleModal(classes, obj) {
        var _this = _super.call(this, classes) || this;
        _this.id = obj.id;
        _this.title = obj.title;
        _this.urlToImage = obj.urlToImage;
        _this.tags = obj.tags;
        _this.content = obj.content;
        _this.date = obj.date;
        return _this;
    }
    // Article Modal generator
    ArticleModal.prototype.generateContent = function () {
        var template = '';
        var article = document.createElement('div');
        article.className = 'article-modal__content';
        this.urlToImage &&
            (template += "<img class=\"strategy__image\" src=".concat(this.urlToImage, " alt=\"strategy\">"));
        if (this.title || this.tags || this.content || this.date) {
            template += "<div class=\"strategy__content\">";
            this.date &&
                (template += "<p class=\"strategy__date\">".concat(this.date, "</p>"));
            this.title &&
                (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
            this.content &&
                (template += "<p class=\"strategy__text\">".concat(this.content, "</p>"));
            if (this.tags) {
                template += "<div class=\"strategy__tags tags\">";
                this.tags.map(function (tag) {
                    template += "<span class=\"tag tag_colored\">".concat(tag, "</span>");
                });
                template += "</div>";
            }
            template += "</div>";
        }
        article.innerHTML = template;
        return article;
    };
    ArticleModal.prototype.renderModal = function () {
        var content = this.generateContent();
        console.log(content);
        _super.prototype.buildModal.call(this, content);
    };
    return ArticleModal;
}(Modal));


;// CONCATENATED MODULE: ./src/index.ts




var data = [
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
window.onload = function () {
    console.log('Hello Rolling Scopes!');
    // Render Articles
    if (data) {
        renderArticlesToDom();
    }
    // Tags
    addTagsClickHandler();
    // Generate Base Modal from Modal Class
    addToolsClickHandler();
};
var addTagsClickHandler = function () {
    document.querySelector('.strategies__tags').addEventListener('click', function (e) {
        if (e.target.classList.contains('tag')) {
            var clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            }
            else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
        }
    });
};
var removeSelectedTags = function () {
    var tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(function (tag) {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    });
};
var selectClickedTag = function (clickedTag) {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
};
var showAllStrategies = function () {
    var strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(function (strategy) {
        strategy.classList.remove('strategy_hidden');
    });
};
var filterStrategyBySelectedTag = function (selectedTag) {
    var strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(function (strategy) {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(function (tag) {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        });
    });
};
var renderArticlesToDom = function () {
    var strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(function (article) {
        strategiesWrapper.append(article.generateArticle());
    });
    addStrategyClickHandler();
};
var getStrategiesWrapper = function () {
    var strategiesConstainer = document.querySelector('.strategy-wrapper');
    strategiesConstainer.innerHTML = '';
    return strategiesConstainer;
};
var generateArticles = function (data) {
    var articles = [];
    data.forEach(function (article) {
        articles.push(new Article(article));
    });
    return articles;
};
var addToolsClickHandler = function () {
    document.querySelector('.tools__button .button').addEventListener('click', function () {
        generateToolsModal();
    });
};
var generateToolsModal = function () {
    renderModalWindow('Test content for Tools Modal');
};
var renderModalWindow = function (content) {
    var modal = new Modal('tools-modal');
    modal.buildModal(content);
};
var addStrategyClickHandler = function () {
    document.querySelector('.strategy-wrapper').addEventListener('click', function (e) {
        if (e.target.closest('.strategy')) {
            var clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
            var clickedStrategyData = getClickedData(clickedStrategyId);
            renderArticleModalWindow(clickedStrategyData);
        }
    });
};
var getClickedData = function (id) {
    return data.find(function (article) { return article.id == Number(id); });
};
var renderArticleModalWindow = function (article) {
    var modal = new ArticleModal('article-modal', article);
    modal.renderModal();
};

/******/ })()
;