const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com/';
const VALID_PASSWORD = 'secret_sauce';

async function login(page, username, password = VALID_PASSWORD) {
await page.goto(BASE_URL);
await page.locator('[data-test="username"]').fill(username);
await page.locator('[data-test="password"]').fill(password);
await page.locator('[data-test="login-button"]').click();
}

async function startCheckout(page) {
await login(page, 'standard_user');

await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator('[data-test="checkout"]').click();
}

test.describe('SauceDemo validation and negative tests', () => {
test('locked-out user cannot log in', async ({ page }) => {
await login(page, 'locked_out_user');


await expect(page.locator('[data-test="error"]')).toContainText(
  'Sorry, this user has been locked out'
);
await expect(page).toHaveURL(BASE_URL);
```

});

test('checkout requires first name before continuing', async ({ page }) => {
await startCheckout(page);

```
await page.locator('[data-test="lastName"]').fill('User');
await page.locator('[data-test="postalCode"]').fill('12345');
await page.locator('[data-test="continue"]').click();

await expect(page.locator('[data-test="error"]')).toContainText(
  'Error: First Name is required'
);
```

});

test('checkout requires last name before continuing', async ({ page }) => {
await startCheckout(page);

```
await page.locator('[data-test="firstName"]').fill('Test');
await page.locator('[data-test="postalCode"]').fill('12345');
await page.locator('[data-test="continue"]').click();

await expect(page.locator('[data-test="error"]')).toContainText(
  'Error: Last Name is required'
);
```

});

test('checkout requires postal code before continuing', async ({ page }) => {
await startCheckout(page);

```
await page.locator('[data-test="firstName"]').fill('Test');
await page.locator('[data-test="lastName"]').fill('User');
await page.locator('[data-test="continue"]').click();

await expect(page.locator('[data-test="error"]')).toContainText(
  'Error: Postal Code is required'
);
```

});
});
