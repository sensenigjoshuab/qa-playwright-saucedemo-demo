const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('SauceDemo smoke tests using Page Object Model', () => {
  test('valid login redirects to inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.inventoryContainer).toBeVisible();
  });

  test('valid user can add backpack to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
    await expect(inventoryPage.backpackRemoveButton).toBeVisible();
  });

  test('checkout flow completes successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.enterCustomerInfo('Test', 'User', '12345');
    await checkoutPage.finishCheckout();

    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('invalid login displays authentication error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrongpassword');

    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });
});
