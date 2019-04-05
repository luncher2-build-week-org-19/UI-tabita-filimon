class Article {
    constructor (article){
        this.article = article;
        
        this.newsButton = article.querySelector('.button');
        
        this.newsButton.addEventListener('click', () => this.expandArticle());   
    }

    expandArticle(){
        const para = this.article.querySelector('.para');
        const date = this.article.querySelector('.date');

        para.classList.toggle('open-para');
        date.classList.toggle('open-date');
    }
}

let articles =document.querySelectorAll('.article').forEach(article => new Article(article));