# Manual Test Cases — SauceDemo QA Portfolio

## Purpose

This document shows manual QA test case design and execution for the SauceDemo public demo application.

The test cases cover core functional flows including login, locked-out login, cart behavior, checkout, order completion, invalid login handling, checkout required-field validation, visual validation, pricing validation, and checkout-input defect validation.

This is a self-directed QA portfolio artifact and is not presented as paid QA employment or production QA ownership.

---

## Test Environment

| Field              | Details                                                           |
| ------------------ | ----------------------------------------------------------------- |
| Application        | SauceDemo                                                         |
| URL                | https://www.saucedemo.com/                                        |
| Browser            | Chrome                                                            |
| Operating System   | Windows                                                           |
| Test Type          | Manual functional testing                                         |
| Test Accounts Used | `standard_user`, `locked_out_user`, `problem_user`, `visual_user` |
| Password           | `secret_sauce`                                                    |

---

## Test Cases

| Test Case ID | Scenario                                               | Preconditions                                                   | Steps                                                                                             | Expected Result                                                          | Actual Result                                                                         | Status |
| ------------ | ------------------------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------ |
| TC-001       | Valid login with standard user                         | User is on SauceDemo login page                                 | 1. Enter `standard_user` 2. Enter `secret_sauce` 3. Click Login                                   | User is redirected to the inventory page                                 | User was redirected to the inventory page                                             | Pass   |
| TC-002       | Invalid login with wrong password                      | User is on SauceDemo login page                                 | 1. Enter `standard_user` 2. Enter an incorrect password 3. Click Login                            | Error message displays and user remains on login page                    | Error message displayed and user remained on login page                               | Pass   |
| TC-003       | Locked-out user login                                  | User is on SauceDemo login page                                 | 1. Enter `locked_out_user` 2. Enter `secret_sauce` 3. Click Login                                 | Locked-out error message displays and user remains on login page         | Locked-out error message displayed and login was blocked                              | Pass   |
| TC-004       | Add product to cart                                    | User is logged in as `standard_user` and on inventory page      | 1. Click Add to Cart for Sauce Labs Backpack 2. Observe cart badge 3. Observe button state        | Cart badge updates and button changes to Remove                          | Cart badge updated and Remove button displayed                                        | Pass   |
| TC-005       | Verify cart contents                                   | Product has been added to cart                                  | 1. Click cart icon 2. Review product name, quantity, and price                                    | Cart shows correct product name, quantity, and price                     | Cart displayed correct product name, quantity, and price                              | Pass   |
| TC-006       | Checkout overview displays totals                      | User has item in cart and enters checkout info                  | 1. Go to checkout 2. Enter first name, last name, and zip code 3. Continue to overview page       | Checkout overview displays item total, tax, and final total              | Item total, tax, and final total displayed                                            | Pass   |
| TC-007       | Complete checkout flow                                 | User is on checkout overview page                               | 1. Click Finish 2. Observe confirmation page                                                      | Order confirmation page displays successful checkout message             | Checkout Complete page displayed confirmation message                                 | Pass   |
| TC-008       | Checkout requires first name                           | User is logged in as `standard_user` and has an item in cart    | 1. Open checkout 2. Leave First Name blank 3. Enter Last Name 4. Enter Zip Code 5. Click Continue | Error message should state First Name is required                        | First Name required error displayed                                                   | Pass   |
| TC-009       | Checkout requires last name                            | User is logged in as `standard_user` and has an item in cart    | 1. Open checkout 2. Enter First Name 3. Leave Last Name blank 4. Enter Zip Code 5. Click Continue | Error message should state Last Name is required                         | Last Name required error displayed                                                    | Pass   |
| TC-010       | Checkout requires postal code                          | User is logged in as `standard_user` and has an item in cart    | 1. Open checkout 2. Enter First Name 3. Enter Last Name 4. Leave Zip Code blank 5. Click Continue | Error message should state Postal Code is required                       | Postal Code required error displayed                                                  | Pass   |
| TC-011       | Product image validation for `problem_user`            | User is on login page                                           | 1. Log in as `problem_user` 2. Observe inventory product images                                   | Each product should display its correct image                            | Multiple products displayed the same dog image                                        | Fail   |
| TC-012       | Product price validation for `visual_user`             | User is on login page                                           | 1. Log in as `visual_user` 2. Observe product prices on inventory page                            | Product prices should display consistently and correctly                 | Multiple product prices displayed unexpected values                                   | Fail   |
| TC-013       | Checkout Last Name input validation for `problem_user` | User is logged in as `problem_user` and has an item in the cart | 1. Open checkout 2. Enter First Name 3. Enter Last Name 4. Enter Zip Code 5. Continue checkout    | Last Name field should accept typed input and allow checkout to continue | Last Name field does not accept input correctly and checkout cannot continue normally | Fail   |

---

## Defect Links

| Defect ID | Related Test Case | Summary                                                           | Severity |
| --------- | ----------------- | ----------------------------------------------------------------- | -------- |
| BUG-001   | TC-011            | Product images display incorrectly for `problem_user`             | Medium   |
| BUG-002   | TC-012            | Product prices display incorrectly for `visual_user`              | High     |
| BUG-003   | TC-013            | Checkout Last Name field does not accept input for `problem_user` | High     |

---

## QA Notes

* Positive testing confirmed that core login, cart, and checkout flows work for `standard_user`.
* Negative testing confirmed that invalid login and locked-out login behavior display appropriate error messages.
* Checkout validation testing confirmed required-field behavior for first name, last name, and postal code.
* Defect testing identified visual, pricing, and checkout-input inconsistencies for specific SauceDemo demo users.
* Evidence was captured through manual observation, GitHub Issues, Chrome testing, and Playwright test output where applicable.
