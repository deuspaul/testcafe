import {Selector} from 'testcafe'

class overviewPage {
    constructor(){
        this.pageTitle = Selector('div').withText('Checkout: Overview')
        this.finishBtn = Selector('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button')
    }
}

export default new overviewPage()