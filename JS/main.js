class Content{
    constructor(content){
        this.content = content
        this.logoButton = content.querySelector('.logoButton');
        this.logoButton.addEventListener('click', () => this.expandContent());

    }

    expandContent() {
        const p = this.content.querySelector('.dropdown-content');
        p.classList.toggle('content-open');
    }
}
let contents = document.querySelectorAll('.content').forEach(content => new Content(content));