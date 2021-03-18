import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('.error-button')
        this.pageTitle = Selector('#login_button_container')
    }
}

export default new LoginPage()