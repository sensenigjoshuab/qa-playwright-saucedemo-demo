# Requirements Traceability — SauceDemo QA Portfolio

## Purpose

This document connects expected product behavior to manual test cases, defect evidence, and automation coverage. It shows how QA work can trace requirements to test execution and documented results.

This is a self-directed QA portfolio artifact using the public SauceDemo demo application.

---

## Traceability Matrix

| Requirement ID | Requirement / Expected Behavior | Test Case ID | Manual Result | Automation Coverage | Evidence |
|---|---|---:|---|---|---|
| REQ-001 | User can log in with valid credentials | TC-001 | Pass | Covered | Manual screenshot evidence + Playwright login test |
| REQ-002 | User receives an error for invalid login credentials | TC-002 | Pass | Covered | Manual screenshot evidence + Playwright invalid login test |
| REQ-003 | User can add a product to the cart | TC-003 | Pass | Covered | Manual screenshot evidence + Playwright cart test |
| REQ-004 | Cart displays correct product name, quantity, and price | TC-004 | Pass | Covered | Manual screenshot evidence + Playwright cart verification |
| REQ-005 | Checkout overview displays item total, tax, and final total | TC-005 | Pass | Partially covered | Manual screenshot evidence |
| REQ-006 | User can complete checkout and see confirmation | TC-006 | Pass | Covered | Manual screenshot evidence + Playwright checkout test |
| REQ-007 | Product images display correctly for each product | TC-007 | Fail | Not covered | GitHub Issue BUG-001 + screenshot evidence |
| REQ-008 | Product prices display correctly and consistently | TC-008 | Fail | Not covered | GitHub Issue BUG-002 + screenshot evidence |

---

## Coverage Summary

| Area | Manual Coverage | Automation Coverage | Notes |
|---|---|---|---|
| Valid login | Yes | Yes | Core happy-path login covered |
| Invalid login | Yes | Yes | Negative login behavior covered |
| Cart behavior | Yes | Yes | Add-to-cart and cart verification covered |
| Checkout flow | Yes | Yes | End-to-end checkout completion covered |
| Product image validation | Yes | No | Documented as observed defect |
| Product price validation | Yes | No | Documented as observed defect |
| DevTools observation | Yes | No | Used for evidence review, not automation |

---

## QA Notes

- Manual testing covers both positive and negative user flows.
- Automation coverage focuses on core repeatable smoke/regression scenarios.
- Known visual and pricing defects are documented separately as GitHub Issues.
- Requirements with failed manual results should be prioritized based on user impact, severity, and business risk.
