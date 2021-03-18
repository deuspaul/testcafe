import {Selector} from 'testcafe'

class completePage {
    constructor(){
        this.pageTitle = Selector('#checkout_complete_container')
    }
}

export default new completePage()