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
| REQ-003 | Locked-out users cannot log in and receive the correct error message | TC-003 | Pass | Not covered | Manual testing |
| REQ-004 | User can add a product to the cart | TC-004 | Pass | Covered | Manual testing + Playwright cart test |
| REQ-005 | Cart displays correct product name, quantity, and price | TC-005 | Pass | Covered | Manual testing + Playwright cart verification |
| REQ-006 | Checkout overview displays item total, tax, and final total | TC-006 | Pass | Partial | Manual testing + partial Playwright checkout validation |
| REQ-007 | User can complete checkout and see confirmation | TC-007 | Pass | Covered | Manual testing + Playwright checkout completion test |
| REQ-008 | Checkout requires first name before continuing | TC-008 | Pass | Not covered | Manual testing |
| REQ-009 | Checkout requires last name before continuing | TC-009 | Pass | Not covered | Manual testing |
| REQ-010 | Checkout requires postal code before continuing | TC-010 | Pass | Not covered | Manual testing |
| REQ-011 | Product images display correctly for each product | TC-011 | Fail | Not covered | GitHub Issue BUG-001 |
| REQ-012 | Product prices display correctly and consistently | TC-012 | Fail | Not covered | GitHub Issue BUG-002 |
| REQ-013 | Checkout form fields accept valid typed input | TC-013 | Fail | Not covered | GitHub Issue BUG-003 |

---

## Coverage Summary

| Area | Manual Coverage | Automation Coverage | Notes |
|---|---|---|---|
| Valid login | Yes | Yes | Core happy-path login covered |
| Invalid login | Yes | Yes | Negative login behavior covered |
| Locked-out login | Yes | No | Good candidate for next automation improvement |
| Cart behavior | Yes | Yes | Add-to-cart and cart verification covered |
| Checkout flow | Yes | Yes | End-to-end checkout completion covered |
| Checkout overview totals | Yes | Partial | Playwright checks core totals in the procedural test |
| Checkout required-field validation | Yes | No | First name, last name, and postal code validation documented manually |
| Product image validation | Yes | No | Documented defect for `problem_user` |
| Product price validation | Yes | No | Documented defect for `visual_user` |
| Checkout input defect validation | Yes | No | Documented defect for `problem_user` |
| Defect documentation | Yes | No | Three observed defects documented through GitHub Issues |

---

## QA Notes

* Manual testing covers positive, negative, validation, and defect-focused flows.
* Automation coverage focuses on core repeatable smoke/regression scenarios.
* Known visual, pricing, and checkout-input defects are documented separately as GitHub Issues.
* Requirements with failed manual results should be prioritized based on user impact, severity, and business risk.
* Not every manual test case is automated yet. This is intentional for an entry-level QA portfolio and helps show the difference between manual coverage and automation coverage.
