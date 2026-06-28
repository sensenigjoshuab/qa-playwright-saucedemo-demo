# Requirements Traceability — SauceDemo QA Portfolio

## Purpose

This document connects expected product behavior to manual test cases, automation coverage, defect evidence, and observed results.

It shows how QA work can trace requirements to test execution and documented outcomes.

This is a self-directed QA portfolio artifact using the public SauceDemo demo application. It is not presented as paid QA employment, production QA ownership, or professional automation framework ownership.

---

## Traceability Matrix

| Requirement ID | Requirement / Expected Behavior | Test Case ID | Manual Result | Automation Coverage | Evidence |
|---|---|---:|---|---|---|
| REQ-001 | User can log in with valid credentials | TC-001 | Pass | Covered | Manual testing + Playwright login test |
| REQ-002 | User receives an error for invalid login credentials | TC-002 | Pass | Covered | Manual testing + Playwright invalid login test |
| REQ-003 | Locked-out users cannot log in and receive the correct error message | TC-003 | Pass | Covered | Manual testing + Playwright locked-out user test |
| REQ-004 | User can add a product to the cart | TC-004 | Pass | Covered | Manual testing + Playwright cart test |
| REQ-005 | Cart displays correct product name, quantity, and price | TC-005 | Pass | Covered | Manual testing + Playwright cart verification |
| REQ-006 | Checkout overview displays item total, tax, and final total | TC-006 | Pass | Partial | Manual testing + partial Playwright checkout validation |
| REQ-007 | User can complete checkout and see confirmation | TC-007 | Pass | Covered | Manual testing + Playwright checkout completion test |
| REQ-008 | Checkout requires first name before continuing | TC-008 | Pass | Covered | Manual testing + Playwright first-name validation test |
| REQ-009 | Checkout requires last name before continuing | TC-009 | Pass | Covered | Manual testing + Playwright last-name validation test |
| REQ-010 | Checkout requires postal code before continuing | TC-010 | Pass | Covered | Manual testing + Playwright postal-code validation test |
| REQ-011 | Product images display correctly for each product | TC-011 | Fail | Not covered | GitHub Issue BUG-001 |
| REQ-012 | Product prices display correctly and consistently | TC-012 | Fail | Not covered | GitHub Issue BUG-002 |
| REQ-013 | Checkout form fields accept valid typed input | TC-013 | Fail | Not covered | GitHub Issue BUG-003 |
| REQ-014 | User can remove a product from the cart | TC-014 | Pass | Covered | Manual testing + Playwright cart-removal regression test |
| REQ-015 | User can sort inventory by product name | TC-015 | Pass | Covered | Manual testing + Playwright name-sorting regression test |
| REQ-016 | User can sort inventory by product price | TC-016 | Pass | Covered | Manual testing + Playwright price-sorting regression test |
| REQ-017 | User can open a product detail page from inventory | TC-017 | Pass | Covered | Manual testing + Playwright product-detail navigation test |

---

## Coverage Summary

| Area | Manual Coverage | Automation Coverage | Notes |
|---|---|---|---|
| Valid login | Yes | Yes | Core happy-path login covered |
| Invalid login | Yes | Yes | Negative login behavior covered |
| Locked-out login | Yes | Yes | Automated in `tests/saucedemo-validation.spec.js` |
| Cart behavior | Yes | Yes | Add-to-cart, cart verification, and cart removal covered |
| Checkout flow | Yes | Yes | End-to-end checkout completion covered |
| Checkout overview totals | Yes | Partial | Playwright checks core totals in the procedural test |
| Checkout First Name validation | Yes | Yes | Automated in `tests/saucedemo-validation.spec.js` |
| Checkout Last Name validation | Yes | Yes | Automated in `tests/saucedemo-validation.spec.js` |
| Checkout Postal Code validation | Yes | Yes | Automated in `tests/saucedemo-validation.spec.js` |
| Inventory sorting | Yes | Yes | Name and price sorting covered |
| Product detail navigation | Yes | Yes | Product detail page validation covered |
| Product image validation | Yes | No | Documented defect for `problem_user` |
| Product price validation | Yes | No | Documented defect for `visual_user` |
| Checkout input defect validation | Yes | No | Documented defect for `problem_user` |
| Defect documentation | Yes | No | Three observed defects documented through GitHub Issues |

---

## QA Notes

- Manual testing covers positive, negative, validation, sorting, cart, checkout, product-detail, and defect-focused flows.
- Automation coverage includes core login, cart, checkout, locked-out login, checkout required-field validation, cart removal, inventory sorting, and product-detail navigation scenarios.
- Known visual, pricing, and checkout-input defects are documented separately as GitHub Issues.
- Requirements with failed manual results should be prioritized based on user impact, severity, and business risk.
- Not every manual test case is automated. This is intentional for an entry-level QA portfolio and helps show the difference between functional manual coverage, automated regression coverage, and documented defect evidence.
