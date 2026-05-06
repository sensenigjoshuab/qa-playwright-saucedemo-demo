# Manual Test Cases — SauceDemo QA Portfolio

## Purpose

This document shows manual QA test case design and execution for the SauceDemo public demo application. The test cases cover core functional flows including login, cart behavior, checkout, order completion, invalid login handling, and basic user-flow validation.

This is a self-directed QA portfolio artifact and is not presented as paid QA employment or production QA ownership.

---

## Test Environment

| Field | Details |
|---|---|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Browser | Chrome |
| Operating System | Windows |
| Test Type | Manual functional testing |
| Test Accounts Used | standard_user, problem_user, visual_user |
| Password | secret_sauce |

---

## Test Cases

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|
| TC-001 | Valid login with standard user | User is on SauceDemo login page | 1. Enter `standard_user` 2. Enter `secret_sauce` 3. Click Login | User is redirected to the inventory page | User was redirected to the inventory page | Pass |
| TC-002 | Invalid login with wrong password | User is on SauceDemo login page | 1. Enter `standard_user` 2. Enter an incorrect password 3. Click Login | Error message displays and user remains on login page | Error message displayed and user remained on login page | Pass |
| TC-003 | Add product to cart | User is logged in as `standard_user` and on inventory page | 1. Click Add to Cart for Sauce Labs Backpack 2. Observe cart badge 3. Observe button state | Cart badge updates and button changes to Remove | Cart badge updated and Remove button displayed | Pass |
| TC-004 | Verify cart contents | Product has been added to cart | 1. Click cart icon 2. Review product name, quantity, and price | Cart shows correct product name, quantity, and price | Cart displayed correct product name, quantity, and price | Pass |
| TC-005 | Checkout overview displays totals | User has item in cart and enters checkout info | 1. Go to checkout 2. Enter first name, last name, and zip code 3. Continue to overview page | Checkout overview displays item total, tax, and total | Item total, tax, and final total displayed | Pass |
| TC-006 | Complete checkout flow | User is on checkout overview page | 1. Click Finish 2. Observe confirmation page | Order confirmation page displays successful checkout message | Checkout Complete page displayed confirmation message | Pass |
| TC-007 | Product image validation for problem_user | User is on login page | 1. Log in as `problem_user` 2. Observe inventory product images | Each product should display its correct image | Multiple products displayed the same dog image | Fail |
| TC-008 | Product price validation for visual_user | User is on login page | 1. Log in as `visual_user` 2. Observe product prices on inventory page | Product prices should display consistently and correctly | Multiple product prices displayed unexpected values | Fail |

---

## Defect Links

| Defect ID | Related Test Case | Summary | Severity |
|---|---|---|---|
| BUG-001 | TC-007 | Product images display incorrectly for `problem_user` | Medium |
| BUG-002 | TC-008 | Product prices display incorrectly for `visual_user` | High |

---

## QA Notes

- Positive testing confirmed that core login, cart, and checkout flows work for `standard_user`.
- Negative testing confirmed that invalid login credentials display an authentication error.
- Defect testing identified visual and pricing inconsistencies for specific SauceDemo demo users.
- Evidence was captured through screenshots, GitHub Issues, Chrome DevTools observations, and Playwright test output where applicable.
