import {Selector} from 'testcafe'

class checkoutPage {
    constructor(){
        this.continueBtn = Selector('input.btn_primary.cart_button')
        this.errorMsg = Selector('.error-button')
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.zipCode = Selector('#postal-code')
    }
}

export default new checkoutPage()