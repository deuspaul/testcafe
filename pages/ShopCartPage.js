import {Selector} from 'testcafe'

class ShopCartPage {
    constructor(){
        this.pageTitle = Selector('#cart_contents_container')
        this.ShopCartItemQty = Selector('div').child('.cart_quantity')
        this.ContinueShopping = Selector('a.btn_secondary')
        this.ShopCartItemQty2 = Selector('.cart_quantity'); 
        this.CheckoutBtn = Selector('a.btn_action.checkout_button')
        this.cartItems = Selector('.cart_item')
    }
}

export default new ShopCartPage()