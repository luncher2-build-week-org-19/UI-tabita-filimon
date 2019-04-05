class Content{
    constructor(content){
        this.content = content;

        this.mainButton = content.querySelector('.logo-button');

        this.mainButton.addEventListener('click', () => this.expandContent());
    }

    expandContent() {
        const p = this.content.querySelector('.dropdown-content');

        p.classList.toggle('content-open');
    }
}

let contents = document.querySelectorAll('.content').forEach(content => new Content(content));