import checkoutPage from '../pages/checkoutPage'
import inventoryPage from '../pages/inventoryPage'
import LoginPage from '../pages/LoginPage'
import overviewPage from '../pages/overviewPage'
import ShopCartPage from '../pages/ShopCartPage'
import completePage from '../pages/complete'

fixture('Saucedemo feature testing')
    .page `https://www.saucedemo.com/`

test('Login with a valid user', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)

    await t.expect(inventoryPage.pageTitle.exists).ok()
})

test('Login with a invalid user', async t => {
    await t
        .typeText(LoginPage.usernameField, "invalid_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    
})


test('Logout from products page', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.BurgerButton)
        .click(inventoryPage.LogoutButton)

    await t.expect(LoginPage.pageTitle.exists).ok()
})

test('Navigate to the shopping cart', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.ShopCartButton)

    await t.expect(ShopCartPage.pageTitle.exists).ok()
})

test('Add a single item to the shopping cart', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.add2CartButton)
        .click(inventoryPage.ShopCartButton)
        const quantityNumber = await ShopCartPage.ShopCartItemQty.textContent
    await t.expect(parseInt(quantityNumber)).gte(1);
})

test('Add multiple items to the shopping cart', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.add2CartButton)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.ContinueShopping)
        .click(inventoryPage.add2CartButton2)
        .click(inventoryPage.ShopCartButton)
        const quantityNumber2 = await ShopCartPage.ShopCartItemQty2.count
    await t.expect(parseInt(quantityNumber2)).gte(2);
})



test('Continue with missing mail information', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.add2CartButton)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.ContinueShopping)
        .click(inventoryPage.add2CartButton2)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.CheckoutBtn)
        .click(checkoutPage.continueBtn)
    await t.expect(checkoutPage.errorMsg.exists).ok()
})




test('Fill users information', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.add2CartButton)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.ContinueShopping)
        .click(inventoryPage.add2CartButton2)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.CheckoutBtn)
        .typeText(checkoutPage.firstName, "Paul")
        .typeText(checkoutPage.lastName, "Furlan")
        .typeText(checkoutPage.zipCode, "12345")
        .click(checkoutPage.continueBtn)
        
    await t.expect(overviewPage.pageTitle.exists).ok()
})




test('Final order items', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.add2CartButton)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.ContinueShopping)
        .click(inventoryPage.add2CartButton2)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.CheckoutBtn)
        .typeText(checkoutPage.firstName, "Paul")
        .typeText(checkoutPage.lastName, "Furlan")
        .typeText(checkoutPage.zipCode, "12345")
        .click(checkoutPage.continueBtn)
        
    await t.expect(overviewPage.pageTitle.exists).ok()
})

test('Complete a purchase', async t => {
    await t
        .typeText(LoginPage.usernameField, "standard_user")
        .typeText(LoginPage.passwordField, "secret_sauce")
        .click(LoginPage.loginButton)
        .click(inventoryPage.add2CartButton)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.ContinueShopping)
        .click(inventoryPage.add2CartButton2)
        .click(inventoryPage.ShopCartButton)
        .click(ShopCartPage.CheckoutBtn)
        .typeText(checkoutPage.firstName, "Paul")
        .typeText(checkoutPage.lastName, "Furlan")
        .typeText(checkoutPage.zipCode, "12345")
        .click(checkoutPage.continueBtn)
        .click(overviewPage.finishBtn)
        
    await t.expect(complete.pageTitle.exists).ok()
})
