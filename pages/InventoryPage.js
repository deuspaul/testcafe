import {Selector} from 'testcafe'

class InventoryPage {
    constructor(){
        this.pageTitle = Selector('#inventory_container')
        this.BurgerButton = Selector('#react-burger-menu-btn')
        this.LogoutButton = Selector('#logout_sidebar_link')
        this.ShopCartButton = Selector('#shopping_cart_container')
        this.add2CartButton = Selector('#inventory_container > div > div:nth-child(2) > div.pricebar > button')
        this.add2CartButton2 = Selector('#inventory_container > div > div:nth-child(4) > div.pricebar > button')



    }
}

export default new InventoryPage()