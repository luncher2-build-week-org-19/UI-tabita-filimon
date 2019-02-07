class Article {
    constructor (article){
        this.article = article;
        
        this.newsButton = article.querySelector('.button');
        
        this.newsButton.addEventListener('click', () => this.expandArticle());   
    }

    expandArticle(){
        const para = this.article.querySelectorAll('.para');

        para.classList.toggle('open');
    }
}

let articles =document.querySelectorAll('.article').forEach(article => new Article(article));