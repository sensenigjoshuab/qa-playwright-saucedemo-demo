# Test Plan — SauceDemo QA Portfolio

## Purpose

This test plan defines the testing approach for a self-directed QA portfolio project using the public SauceDemo demo application.

The goal is to demonstrate manual QA planning, functional testing, defect documentation, traceability, and beginner Playwright automation.

This project is not presented as paid QA employment, production QA ownership, or advanced automation framework ownership.

---

## Application Under Test

| Field                | Details                                         |
| -------------------- | ----------------------------------------------- |
| Application          | SauceDemo                                       |
| URL                  | https://www.saucedemo.com/                      |
| Application Type     | Public demo e-commerce application              |
| Primary Test Browser | Chrome                                          |
| Operating System     | Windows                                         |
| Test Type            | Manual functional testing + beginner automation |

---

## Test Objectives

* Validate core login behavior.
* Validate invalid-login error handling.
* Validate cart behavior.
* Validate checkout flow.
* Validate order-completion confirmation.
* Identify visible product-data defects.
* Document defects with clear expected vs. actual results.
* Map test cases to requirements through traceability.
* Automate repeatable smoke/regression checks using Playwright.

---

## Scope

The following areas are in scope:

* Login page
* Inventory/product listing page
* Cart page
* Checkout information page
* Checkout overview page
* Checkout completion page
* Product image validation
* Product price validation
* Basic accessibility observations
* Basic API-testing concept awareness
* Playwright smoke/regression automation

---

## Out of Scope

The following areas are out of scope:

* Real payment processing
* Real user account management
* Backend/database validation
* Production performance testing
* Security penetration testing
* Full WCAG accessibility audit
* Cross-browser certification
* Mobile-device certification
* Production-grade automation framework ownership

---

## Test Accounts

| Account           | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `standard_user`   | Validate normal happy-path user flows       |
| `problem_user`    | Validate known visual/input defects         |
| `visual_user`     | Validate visual and pricing inconsistencies |
| `locked_out_user` | Potential negative login validation         |

Password used for demo accounts:

```txt
secret_sauce
```

---

## Test Types

| Test Type                       | Purpose                                             |
| ------------------------------- | --------------------------------------------------- |
| Functional testing              | Confirm core user flows behave as expected          |
| Positive testing                | Confirm valid users can complete expected actions   |
| Negative testing                | Confirm invalid actions display appropriate errors  |
| Defect validation               | Identify and document visible application defects   |
| Smoke testing                   | Confirm the most important flows work quickly       |
| Regression testing              | Re-run repeatable checks after changes              |
| Basic accessibility observation | Identify simple usability/accessibility risks       |
| Beginner automation             | Automate repeatable browser checks using Playwright |

---

## Entry Criteria

Testing can begin when:

* The SauceDemo public demo site is accessible.
* Demo credentials are available.
* Chrome browser is available.
* Test cases are defined.
* The tester can access GitHub for defect documentation.
* Playwright project files are available for automation checks.

---

## Exit Criteria

Testing is complete when:

* Planned manual test cases have been executed.
* Pass/fail results have been recorded.
* Observed defects have been documented as GitHub Issues.
* Requirements traceability has been updated.
* Automation tests have been run locally or through CI where applicable.
* Known limitations are documented honestly.

---

## Defect Severity Guide

| Severity | Definition                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------ |
| High     | Blocks or seriously disrupts a core user flow, creates business risk, or affects purchase decisions    |
| Medium   | Creates user confusion, reduces trust, or affects user experience without fully blocking the core flow |
| Low      | Minor visual, wording, or usability issue with limited impact                                          |

---

## Risks and Limitations

* SauceDemo is a public demo site, not a production application.
* Some defects may be intentionally built into demo accounts.
* Manual observations are limited to the tested browser and environment.
* Automation coverage focuses on core repeatable flows, not full application coverage.
* Accessibility observations are basic QA observations, not a formal WCAG audit.

---

## Deliverables

* `manual-test-cases.md`
* `requirements-traceability.md`
* `bug-summary.md`
* GitHub Issues for documented defects
* Playwright test files
* Page Object Model files
* GitHub Actions workflow
* README portfolio summary
