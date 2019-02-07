
class Article {
    constructor (article){
        this.article = article;
        console.log(this.article);
        this.button = article.querySelector('.button');
        console.log(this.button);
        this.button.addEventListener('click', () => this.expandArticle());   
    }

    expandArticle(){
        const p = this.article.querySelector('.para');
        p.classList.toggle('open');
    }
}

let articles =document.querySelectorAll('.article').forEach(article => new Article(article));