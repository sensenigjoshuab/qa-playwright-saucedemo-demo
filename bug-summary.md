# Bug Summary — SauceDemo QA Portfolio

## Purpose

This document summarizes the defects identified during manual QA testing of the SauceDemo public demo application.

It is intended to show entry-level defect documentation, severity judgment, expected vs. actual result analysis, and user-impact awareness.

This is a self-directed QA portfolio artifact and is not presented as paid QA employment, production defect ownership, or professional triage authority.

---

## Defect Summary Table

| Bug ID  | GitHub Issue | Related Test Case | Summary                                                           | Severity | Status |
| ------- | -----------: | ----------------: | ----------------------------------------------------------------- | -------- | ------ |
| BUG-001 |     Issue #1 |            TC-011 | Product images display incorrectly for `problem_user`             | Medium   | Open   |
| BUG-002 |     Issue #2 |            TC-012 | Product prices display incorrectly for `visual_user`              | High     | Open   |
| BUG-003 |     Issue #3 |            TC-013 | Checkout Last Name field does not accept input for `problem_user` | High     | Open   |

---

## Severity Definitions Used

| Severity | Meaning                                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| Critical | Blocks a core business flow for all or most users with no workaround                                             |
| High     | Blocks or seriously disrupts an important user flow, affects purchase confidence, or creates major business risk |
| Medium   | Creates user confusion, trust issues, or degraded experience, but does not fully block the main flow             |
| Low      | Minor visual, wording, or usability issue with limited user impact                                               |

---

## BUG-001: Product Images Display Incorrectly for `problem_user`

| Field             | Details                     |
| ----------------- | --------------------------- |
| Related Test Case | TC-011                      |
| GitHub Issue      | Issue #1                    |
| Severity          | Medium                      |
| Status            | Open                        |
| Test Account      | `problem_user`              |
| Area              | Inventory / Product Display |

### Summary

When logged in as `problem_user`, multiple product images display the same dog image instead of showing the correct image for each product.

### Expected Result

Each product should display its correct product image.

### Actual Result

Multiple products display the same incorrect image.

### Impact

This can confuse users, reduce trust in the product catalog, and make the inventory page appear unreliable. Since the checkout flow is not fully blocked, this is classified as Medium severity.

---

## BUG-002: Product Prices Display Incorrectly for `visual_user`

| Field             | Details                     |
| ----------------- | --------------------------- |
| Related Test Case | TC-012                      |
| GitHub Issue      | Issue #2                    |
| Severity          | High                        |
| Status            | Open                        |
| Test Account      | `visual_user`               |
| Area              | Inventory / Product Pricing |

### Summary

When logged in as `visual_user`, multiple product prices display incorrect or unexpected values.

### Expected Result

Each product should display the correct and consistent price.

### Actual Result

Multiple product prices display incorrect values for the affected user.

### Impact

Incorrect pricing can mislead users, reduce trust, and affect purchasing decisions. Since pricing is a core e-commerce function, this is classified as High severity.

---

## BUG-003: Checkout Last Name Field Does Not Accept Input for `problem_user`

| Field             | Details                         |
| ----------------- | ------------------------------- |
| Related Test Case | TC-013                          |
| GitHub Issue      | Issue #3                        |
| Severity          | High                            |
| Status            | Open                            |
| Test Account      | `problem_user`                  |
| Area              | Checkout / Customer Information |

### Summary

When logged in as `problem_user`, the checkout Last Name field does not accept typed input correctly, preventing the checkout information step from being completed normally.

### Expected Result

The Last Name field should accept valid typed input and allow the user to continue the checkout flow.

### Actual Result

The Last Name field does not accept the entered text correctly, disrupting or blocking checkout.

### Impact

This affects a core e-commerce flow because users may be unable to complete checkout. Since checkout completion is a major business-critical function, this is classified as High severity.

---

## Defect Risk Summary

| Risk Area       | Observed Risk                             | Business/User Impact                                      |
| --------------- | ----------------------------------------- | --------------------------------------------------------- |
| Product Images  | Incorrect images for `problem_user`       | Users may not trust the product catalog                   |
| Product Pricing | Incorrect prices for `visual_user`        | Users may make decisions based on wrong price information |
| Checkout Form   | Last Name input defect for `problem_user` | Users may be blocked from completing checkout             |

---

## QA Notes

* All defects were identified through manual functional testing.
* Defects are documented separately from passing test cases to show clear expected vs. actual behavior.
* Severity was assigned based on user impact and business risk.
* Known SauceDemo demo-user issues are treated as valid portfolio defects because they demonstrate defect recognition and documentation skill.
* These defects are not closed because this portfolio does not control the SauceDemo application code.
