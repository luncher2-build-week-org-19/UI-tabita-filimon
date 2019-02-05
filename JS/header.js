class Login {
    constructor(login){
        this.login = login;
        
        this.button = document.querySelector('.login');

        this.button.addEventListener('click', () => this.toggleLogIn());
    }

     toggleLogIn(){
         this.login.classList.toggle('login-open');
     }
}


let logins = document.querySelectorAll('.logins').forEach(login => new Login(login));
