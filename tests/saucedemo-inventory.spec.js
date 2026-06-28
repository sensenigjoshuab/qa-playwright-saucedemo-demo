const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.saucedemo.com/';
const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

async function loginAsStandardUser(page) {
  await page.goto(BASE_URL);
  await page.locator('[data-test="username"]').fill(VALID_USERNAME);
  await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory\.html/);
}

async function getInventoryItemNames(page) {
  return page.locator('[data-test="inventory-item-name"]').allTextContents();
}

async function getInventoryItemPrices(page) {
  const priceTexts = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  return priceTexts.map((price) => Number(price.replace('$', '')));
}

test.describe('SauceDemo inventory and cart regression tests', () => {
  test('user can remove backpack from cart', async ({ page }) => {
    await loginAsStandardUser(page);

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="inventory-item"]')).toContainText('Sauce Labs Backpack');

    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(0);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
  });

  test('inventory can be sorted by name from Z to A', async ({ page }) => {
    await loginAsStandardUser(page);

    await page.locator('[data-test="product-sort-container"]').selectOption('za');

    const itemNames = await getInventoryItemNames(page);
    const expectedNames = [...itemNames].sort().reverse();

    expect(itemNames).toEqual(expectedNames);
  });

  test('inventory can be sorted by price from low to high', async ({ page }) => {
    await loginAsStandardUser(page);

    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    const itemPrices = await getInventoryItemPrices(page);
    const expectedPrices = [...itemPrices].sort((a, b) => a - b);

    expect(itemPrices).toEqual(expectedPrices);
  });

  test('user can open backpack product detail page from inventory', async ({ page }) => {
    await loginAsStandardUser(page);

    await page.locator('[data-test="item-4-title-link"]').click();

    await expect(page).toHaveURL(/inventory-item\.html\?id=4/);
    await expect(page.locator('[data-test="inventory-details-name"]')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="inventory-details-price"]')).toHaveText('$29.99');
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  });
});
