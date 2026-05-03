const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com/';
const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

async function login(page, username = VALID_USERNAME, password = VALID_PASSWORD) {
  await page.goto(BASE_URL);
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

test('valid login redirects to inventory page', async ({ page }) => {
  await login(page);

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('valid user can add backpack to cart', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await expect(page.getByRole('button', { name: 'Remove' }).first()).toBeVisible();
});

test('checkout flow completes successfully for backpack purchase', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.locator('.shopping_cart_link').click();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('$29.99')).toBeVisible();

  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Zip/Postal Code').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByText('Checkout: Overview')).toBeVisible();
  await expect(page.getByText('Item total: $29.99')).toBeVisible();
  await expect(page.getByText('Tax: $2.40')).toBeVisible();
  await expect(page.getByText('Total: $32.39')).toBeVisible();

  await page.getByRole('button', { name: 'Finish' }).click();
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('invalid login displays authentication error message', async ({ page }) => {
  await login(page, VALID_USERNAME, 'wrongpassword');

  await expect(page.getByText('Username and password do not match')).toBeVisible();
  await expect(page).toHaveURL(BASE_URL);
});
