# Test Plan — SauceDemo QA Portfolio

## Purpose

This test plan defines the scope, approach, test types, risks, entry criteria, exit criteria, and deliverables for a self-directed QA portfolio project using the public SauceDemo demo application.

This project is intended to demonstrate entry-level QA planning, manual functional testing, defect documentation, requirements traceability, and beginner Playwright automation.

This is not presented as paid QA employment, production QA ownership, or professional test-management ownership.

---

## Application Under Test

| Field                           | Details                                |
| ------------------------------- | -------------------------------------- |
| Application                     | SauceDemo                              |
| URL                             | https://www.saucedemo.com/             |
| Application Type                | Public demo e-commerce web application |
| Primary Test Type               | Manual functional testing              |
| Automation Tool                 | Playwright                             |
| Automation Language             | JavaScript                             |
| Browser Used for Manual Testing | Chrome                                 |
| Operating System                | Windows                                |

---

## Test Objectives

The main objectives of this QA project are to verify that:

* Users can log in with valid credentials.
* Invalid credentials display the correct error behavior.
* Locked-out users are prevented from logging in.
* Users can add products to the cart.
* The cart displays correct product details.
* Users can complete the checkout flow.
* Checkout required-field validation works correctly.
* Known demo-user defects are documented clearly.
* Requirements can be traced to manual test cases, automation coverage, and defect evidence.
* Basic Playwright automation can validate repeatable smoke/regression flows.

---

## Scope

### In Scope

| Area           | Included                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------ |
| Login          | Valid login, invalid login, locked-out user login                                          |
| Inventory      | Product display, add-to-cart behavior, cart badge behavior                                 |
| Cart           | Product name, quantity, and price verification                                             |
| Checkout       | Customer information form, overview page, order completion                                 |
| Validation     | Required first name, last name, and postal code checks                                     |
| Defect Testing | `problem_user` image issue, `visual_user` price issue, `problem_user` checkout input issue |
| Documentation  | Manual test cases, defect reports, traceability matrix, summary documentation              |
| Automation     | Beginner Playwright smoke/regression tests for core flows                                  |
| CI             | GitHub Actions workflow for automated test execution                                       |

### Out of Scope

| Area                     | Reason                                                             |
| ------------------------ | ------------------------------------------------------------------ |
| Payment processing       | SauceDemo is a public demo site and does not process real payments |
| Real user accounts       | Only public demo users are used                                    |
| Database validation      | No database access is available                                    |
| Backend ownership        | This project focuses on UI behavior and QA documentation           |
| Full accessibility audit | Only basic accessibility observations are included                 |
| Full API test suite      | API testing is documented conceptually only                        |
| Cross-device testing     | Scope is limited to desktop browser testing                        |
| Performance/load testing | Not required for this entry-level portfolio project                |

---

## Test Accounts

| User              | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `standard_user`   | Main positive-flow testing                       |
| `locked_out_user` | Locked-out login validation                      |
| `problem_user`    | Known image and checkout-input defect validation |
| `visual_user`     | Known visual/pricing defect validation           |

Password used for demo accounts:

```txt
secret_sauce
```

---

## Test Types

| Test Type                | Purpose                                            | Status                            |
| ------------------------ | -------------------------------------------------- | --------------------------------- |
| Functional Testing       | Verify core user flows work as expected            | Included                          |
| Positive Testing         | Confirm valid actions succeed                      | Included                          |
| Negative Testing         | Confirm invalid actions show correct errors        | Included                          |
| Validation Testing       | Confirm required checkout fields are enforced      | Included                          |
| Regression/Smoke Testing | Confirm main flows still work after changes        | Included through Playwright       |
| Defect Validation        | Confirm known demo-user issues are documented      | Included                          |
| Accessibility Awareness  | Identify basic user-experience accessibility risks | Basic observations included       |
| API Testing Awareness    | Show understanding of API testing concepts         | Conceptual documentation included |

---

## Entry Criteria

Testing can begin when:

* The SauceDemo website is accessible.
* Demo account credentials are available.
* Chrome browser is available for manual testing.
* Test scenarios and expected results are defined.
* Playwright dependencies are installed for automated test execution.
* The GitHub repository is available for documentation and defect tracking.

---

## Exit Criteria

Testing for this portfolio cycle is considered complete when:

* Core manual test cases are documented and executed.
* Pass/fail results are recorded.
* Observed defects are documented with steps, expected result, actual result, severity, and impact.
* Requirements are mapped to test cases and evidence.
* Core Playwright tests run successfully.
* GitHub Actions CI is configured to run automated tests.
* README and recruiter-facing documentation accurately describe the project.

---

## Test Deliverables

| Deliverable                        | Purpose                                         |
| ---------------------------------- | ----------------------------------------------- |
| `README.md`                        | Main project overview                           |
| `test-plan.md`                     | QA planning scope and strategy                  |
| `manual-test-cases.md`             | Manual test case design and execution results   |
| `requirements-traceability.md`     | Requirement-to-test-to-defect mapping           |
| `bug-summary.md`                   | Defect overview and severity summary            |
| `accessibility-observations.md`    | Basic accessibility awareness notes             |
| `api-testing-observations.md`      | Basic API testing concept notes                 |
| `recruiter-quick-view.md`          | Fast summary for recruiters and hiring managers |
| `tests/`                           | Playwright automated test files                 |
| `pages/`                           | Page Object Model files                         |
| `.github/workflows/playwright.yml` | GitHub Actions CI workflow                      |

---

## Risks and Limitations

| Risk / Limitation                       | Impact                                                  | Mitigation                                                                     |
| --------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Public demo site may change             | Tests may fail if UI or data changes                    | Use stable selectors where possible and document assumptions                   |
| Limited backend access                  | Cannot verify database or server-side behavior directly | Focus on UI-visible behavior and documented API-testing awareness              |
| Demo users intentionally contain issues | Some failures are expected by design                    | Document known defects clearly instead of treating them as automation failures |
| Automation coverage is beginner-level   | Not all manual scenarios are automated                  | Clearly separate manual coverage from automation coverage                      |
| No full accessibility audit             | Accessibility conclusions are limited                   | Label observations as basic awareness only                                     |
| No production QA environment            | Project is portfolio-based                              | Clearly state that this is self-directed practice                              |

---

## QA Approach

The project uses a combined manual and automation approach:

1. Define expected behavior for core SauceDemo flows.
2. Create manual test cases for positive, negative, validation, and defect-focused scenarios.
3. Execute manual tests and record pass/fail results.
4. Document observed defects using GitHub Issues.
5. Map requirements to test cases, automation coverage, and defect evidence.
6. Automate the most repeatable smoke/regression scenarios using Playwright.
7. Run automated tests locally and through GitHub Actions CI.
8. Keep documentation accurate and honest about the project scope and experience level.

---

## Summary

This test plan supports an entry-level QA portfolio by showing that the tester can plan QA work, define testing scope, execute manual tests, report defects, understand traceability, and build beginner-level Playwright automation for repeatable functional flows.
