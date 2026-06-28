# Automation Strategy — SauceDemo QA Portfolio

## Purpose

This document explains the automation approach used in this QA portfolio project.

It is intended for technical reviewers who want to understand what was automated, why it was automated, what was intentionally left manual, and how the test suite is organized.

This is not presented as advanced SDET framework ownership. It is beginner-to-junior-level Playwright automation supporting a manual QA portfolio.

---

## Automation Goals

The automation suite focuses on repeatable UI scenarios that are useful for smoke and regression testing:

- Valid login
- Invalid login
- Locked-out login
- Add-to-cart behavior
- Cart verification
- Remove-from-cart behavior
- Checkout completion
- Required checkout field validation
- Inventory sorting
- Product-detail navigation

---

## Automation Scope

| Area | Automated | Reason |
|---|---:|---|
| Login | Yes | Core entry point and high-value smoke check |
| Invalid login | Yes | Simple repeatable negative test |
| Locked-out login | Yes | Important account-state validation |
| Add to cart | Yes | Core e-commerce behavior |
| Remove from cart | Yes | Core cart regression behavior |
| Checkout completion | Yes | Business-critical happy path |
| Checkout required fields | Yes | Stable validation behavior |
| Inventory sorting | Yes | Repeatable functional regression check |
| Product detail page | Yes | Repeatable navigation/content validation |
| Product image defect | No | Kept as manual documented defect to avoid automating known broken demo-user behavior |
| Product price defect | No | Kept as manual documented defect to avoid automating known broken demo-user behavior |
| `problem_user` checkout defect | No | Kept as manual documented defect because it intentionally demonstrates defect reporting |

---

## File Structure

| File | Purpose |
|---|---|
| `tests/saucedemo.spec.js` | Procedural tests for core smoke flows |
| `tests/saucedemo-pom.spec.js` | Page Object Model version of core smoke flows |
| `tests/saucedemo-validation.spec.js` | Negative login and checkout validation tests |
| `tests/saucedemo-inventory.spec.js` | Inventory sorting, product-detail, and cart-removal regression tests |
| `pages/LoginPage.js` | Login page object |
| `pages/InventoryPage.js` | Inventory page object |
| `pages/CartPage.js` | Cart page object |
| `pages/CheckoutPage.js` | Checkout page object |
| `playwright.config.js` | Playwright configuration |
| `.github/workflows/playwright.yml` | GitHub Actions workflow |

---

## Selector Strategy

The tests use stable `data-test` selectors where practical because they are less brittle than text-only selectors or CSS class selectors.

Examples:

```js
page.locator('[data-test="username"]')
page.locator('[data-test="password"]')
page.locator('[data-test="login-button"]')
page.locator('[data-test="shopping-cart-link"]')
page.locator('[data-test="product-sort-container"]')
```

Some text assertions are still useful when validating user-facing content, such as confirmation messages and product names.

---

## CI Strategy

GitHub Actions runs the Playwright suite on:

- Push to `main`
- Pull request to `main`
- Manual workflow dispatch

The CI workflow proves that the automated tests can run outside the local development environment.

---

## Why Some Defects Are Not Automated

The known SauceDemo demo-user issues are documented as manual defects instead of being converted into failing automated tests.

That is intentional because the goal is to show:

- Clear defect recognition
- Expected vs. actual analysis
- Severity and impact reasoning
- Manual defect documentation
- Traceability from requirement to test case to defect

In a production environment, known defects would usually be tracked separately and automated only when there is value in preventing regression after a fix.

---

## Maintenance Notes

Future improvements could include:

- Adding screenshots or traces for defect evidence
- Expanding cross-browser testing
- Adding tagged test groups such as `@smoke` and `@regression`
- Adding API practice against a public API designed for testing
- Improving Page Object Model coverage for inventory sorting and product-detail pages
