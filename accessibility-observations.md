# Basic Accessibility Observations — SauceDemo QA Portfolio

## Purpose

This document shows basic accessibility-focused QA observations for the SauceDemo public demo application.

This is not presented as a formal WCAG audit, accessibility certification, or expert accessibility review. It is a basic manual QA observation exercise intended to show awareness of accessibility-related user experience risks.

---

## Test Environment

| Field            | Details                                              |
| ---------------- | ---------------------------------------------------- |
| Application      | SauceDemo                                            |
| URL              | https://www.saucedemo.com/                           |
| Browser          | Chrome                                               |
| Operating System | Windows                                              |
| Test Type        | Basic manual accessibility observation               |
| Scope            | Login page, inventory page, cart flow, checkout flow |

---

## Accessibility Observation Checklist

| Check ID | Area                        | Observation                                                              | Expected Result                                                                            | Actual Result                                                       | Status | Notes                                                      |
| -------- | --------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ------ | ---------------------------------------------------------- |
| A11Y-001 | Keyboard navigation         | User should be able to move through login fields and buttons using Tab   | Focus moves logically through username, password, login button, and page controls          | Keyboard navigation was usable during basic manual review           | Pass   | Basic keyboard check only                                  |
| A11Y-002 | Visible focus indicator     | Interactive elements should show visible focus when selected by keyboard | Buttons, links, and fields show a visible focus state                                      | Focus indicator was visible enough during basic keyboard navigation | Pass   | Not a full WCAG contrast/focus audit                       |
| A11Y-003 | Form labels / field clarity | Login and checkout fields should be understandable to users              | Username, password, first name, last name, and postal code fields are clearly identifiable | Fields were understandable through visible placeholder/field text   | Pass   | Placeholder-based clarity observed                         |
| A11Y-004 | Error message clarity       | Invalid login error should clearly explain what went wrong               | Error message is visible and understandable                                                | Invalid login error displays after failed login                     | Pass   | Observed during negative login testing                     |
| A11Y-005 | Error recovery              | User should be able to correct invalid login input after an error        | User can edit fields and retry login                                                       | User can correct login fields and retry after failed login          | Pass   | Basic manual validation                                    |
| A11Y-006 | Button text clarity         | Buttons should clearly describe the action                               | Buttons such as Login, Add to Cart, Remove, Continue, and Finish are understandable        | Button text clearly communicates user actions                       | Pass   | Basic content clarity check                                |
| A11Y-007 | Page structure              | Main pages should present content in a logical visual order              | Login, inventory, cart, and checkout pages are understandable when scanned visually        | Pages were understandable during basic manual review                | Pass   | Visual/manual observation only                             |
| A11Y-008 | Color-only communication    | Important status or error information should not rely only on color      | User can understand status/error without relying only on color                             | Invalid login includes a visible text error message                 | Pass   | Error uses message text, not color alone                   |
| A11Y-009 | Checkout form usability     | Checkout fields should be understandable and easy to complete            | First name, last name, and postal code fields are clear                                    | Standard checkout fields were understandable for `standard_user`    | Pass   | Separate `problem_user` input defect documented as BUG-003 |
| A11Y-010 | Confirmation clarity        | Order completion message should clearly communicate success              | User sees clear completion message after checkout                                          | Checkout Complete page displayed confirmation message               | Pass   | Observed during manual QA session                          |

---

## Manual Accessibility Testing Steps

### Keyboard Navigation Check

1. Open `https://www.saucedemo.com/`.
2. Press `Tab` repeatedly.
3. Observe whether focus moves through username, password, and login button in a logical order.
4. Press `Shift + Tab` to move backward.
5. Confirm the user can identify the currently focused element.

### Invalid Login Error Check

1. Enter a valid username.
2. Enter an incorrect password.
3. Click Login.
4. Confirm an error message displays.
5. Confirm the message is understandable without relying only on color.
6. Confirm the user can correct the fields and try again.

### Checkout Form Check

1. Log in as `standard_user`.
2. Add a product to the cart.
3. Go to checkout.
4. Review first name, last name, and postal code fields.
5. Confirm each field is understandable.
6. Complete checkout and confirm the success message is clear.

---

## Summary

| Area                                       | Result                                                                |
| ------------------------------------------ | --------------------------------------------------------------------- |
| Keyboard navigation                        | Pass, basic manual observation                                        |
| Visible focus indicator                    | Pass, basic manual observation                                        |
| Form/field clarity                         | Pass, basic manual observation                                        |
| Invalid login message clarity              | Pass                                                                  |
| Error recovery                             | Pass                                                                  |
| Color-only communication for invalid login | Pass                                                                  |
| Checkout confirmation clarity              | Pass                                                                  |
| Checkout field clarity                     | Pass for `standard_user`; `problem_user` defect documented separately |

---

## QA Notes

* This document demonstrates basic accessibility awareness as part of manual QA practice.
* The goal is to identify user experience risks, not to certify compliance.
* This review is limited to basic manual observation in Chrome on Windows.
* Any formal accessibility review should be performed against WCAG standards by a qualified accessibility specialist or with dedicated accessibility tooling.
* The `problem_user` checkout input behavior is documented separately as BUG-003 because it affects functional checkout input, not only accessibility.
