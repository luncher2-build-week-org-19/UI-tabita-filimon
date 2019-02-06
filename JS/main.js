class Content{
    constructor(content){
        this.content = content
        this.logoButton = content.querySelector('.logoButton');
        this.logoButton.addEventListener('click', () => this.expandContent());

    }

    expandContent() {
        // const buttons = document.getElementsByClassName('logoButton');
        // Array.from(buttons).forEach(button => button.classList.remove('active-button'));
        // this.content.classList.toggle('active-button');

        // const words = document.getElementsByClassName('dropdown-content');
        // Array.from(words).forEach(word => word.classList.remove('content-open'));
        // words.classList.toggle('content-open');

        // this.content.classList.toggle('content-open');
        const p = this.content.querySelector('.dropdown-content');
        p.classList.toggle('content-open');
    }
}
let contents = document.querySelectorAll('.content').forEach(content => new Content(content));