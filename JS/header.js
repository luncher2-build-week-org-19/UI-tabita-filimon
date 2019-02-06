class Login {
    constructor(login){
        this.login = login;
        console.log(login)
        this.login.addEventListener('mouseover', () => this.toggleLogIn());
        this.button = document.querySelector('.logins');
        this.content = document.querySelector('.login-content');
        //this.button.addEventListener('mouseover', () => this.toggleLogIn());
    }

     toggleLogIn(){
         console.log(this)
        // const tabs = document.getElementsByClassName('active-tab');
        // Array.from(tabs).forEach(tab => tab.classList.remove('active-tab'));
        // this.login.classList.add('active-tab');
        // this.login.classList.toggle('login-content');
     }
}
//let logins = document.querySelectorAll('.logins').forEach(login => new Login(login));
let adminsMenu = document.querySelectorAll('.admins').forEach(login => new Login(login));