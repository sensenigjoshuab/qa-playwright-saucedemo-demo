# QA Playwright SauceDemo Portfolio

![Playwright Tests](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/actions/workflows/playwright.yml/badge.svg)

## Purpose

This repository is a self-directed QA portfolio project using the public SauceDemo demo application.

It demonstrates manual QA fundamentals, functional test case design, bug reporting, requirements traceability, QA test planning, defect documentation, beginner Playwright automation, Page Object Model organization, and GitHub Actions CI.

This project is not presented as paid QA employment, production QA ownership, or advanced automation framework ownership.

---

## What This Project Demonstrates

* Manual functional testing
* Positive and negative test scenarios
* Login, locked-out login, cart, checkout, validation, and order-completion testing
* Clear expected vs. actual result documentation
* Bug reporting through GitHub Issues
* Requirements traceability
* QA test planning
* Defect summary documentation
* Basic accessibility-awareness observations
* Basic API-testing concept awareness
* Playwright automation using JavaScript
* Page Object Model structure
* GitHub Actions CI test execution

---

## Test Coverage Summary

| Area | Manual Coverage | Automation Coverage | Status |
|---|---:|---:|---|
| Valid login | Yes | Yes | Passing |
| Invalid login | Yes | Yes | Passing |
| Locked-out login | Yes | Yes | Passing |
| Add to cart | Yes | Yes | Passing |
| Cart verification | Yes | Yes | Passing |
| Checkout overview | Yes | Partial | Passing |
| Checkout completion | Yes | Yes | Passing |
| Checkout First Name validation | Yes | Yes | Passing |
| Checkout Last Name validation | Yes | Yes | Passing |
| Checkout Postal Code validation | Yes | Yes | Passing |
| Product image validation | Yes | No | Documented defect |
| Product price validation | Yes | No | Documented defect |
| `problem_user` checkout input defect | Yes | No | Documented defect |

---

## Automation Structure

| Area | Details |
|---|---|
| Framework | Playwright |
| Language | JavaScript |
| Test runner | Playwright Test |
| Structure | Procedural tests + Page Object Model tests + validation/negative tests |
| Test count | 12 Playwright tests across 3 spec files |
| CI | GitHub Actions |
| CI browser strategy | Uses preinstalled Chrome in CI to avoid slow browser downloads |
| Reporting | Playwright HTML/list reporter |

---

## Automated Test Files

| Spec File | Purpose |
|---|---|
| `tests/saucedemo.spec.js` | Core procedural Playwright tests for login, cart, checkout, and invalid login |
| `tests/saucedemo-pom.spec.js` | Core smoke flows organized using Page Object Model classes |
| `tests/saucedemo-validation.spec.js` | Locked-out login and checkout required-field validation tests |

---

## Repository Files

| File / Folder | Purpose |
|---|---|
| `test-plan.md` | QA planning scope, risks, entry/exit criteria, and test approach |
| `manual-test-cases.md` | Manual QA test cases, execution results, and automation coverage mapping |
| `requirements-traceability.md` | Requirement-to-test-to-defect traceability |
| `bug-summary.md` | Summary of documented defects, severity, status, and related test cases |
| `accessibility-observations.md` | Basic accessibility-awareness checklist |
| `api-testing-observations.md` | Basic API-testing concept notes |
| `recruiter-quick-view.md` | Fast summary for recruiters and hiring managers |
| `tests/saucedemo.spec.js` | Basic Playwright tests written directly in the spec file |
| `tests/saucedemo-pom.spec.js` | Playwright tests using Page Object Model structure |
| `tests/saucedemo-validation.spec.js` | Playwright validation and negative tests |
| `pages/` | Page Object Model classes |
| `playwright.config.js` | Playwright configuration |
| `.github/workflows/playwright.yml` | GitHub Actions CI workflow |

---

## How to Run Locally

Install dependencies:

`npm install`

Install Playwright browsers for local testing:

`npx playwright install`

Run tests:

`npm test`

Run headed mode:

`npm run test:headed`

Open the Playwright report:

`npm run report`

---

## CI Notes

GitHub Actions runs the Playwright test suite on push, pull request, and manual workflow dispatch.

The CI workflow is configured to use the Chrome browser already available on the GitHub-hosted runner. This avoids slow browser-download steps and keeps the portfolio workflow faster and more reliable.

---

## Documented Defects

| Bug ID | Issue | Summary | Severity |
|---|---:|---|---|
| BUG-001 | Issue #1 | Product images display incorrectly for `problem_user` | Medium |
| BUG-002 | Issue #2 | Product prices display incorrectly for `visual_user` | High |
| BUG-003 | Issue #3 | Checkout Last Name field does not accept input for `problem_user` | High |

---

## Best-Fit Role Signal

This project is strongest for:

* Manual QA Tester
* QA Analyst
* Functional Tester
* UAT Tester
* Software Tester
* Junior QA Tester
* Junior Hybrid QA Tester
* QA Support Analyst

It shows that I can document test cases, execute functional flows, report defects clearly, use GitHub Issues, understand basic traceability, create QA planning artifacts, and build beginner-level Playwright automation.

The strongest role fit is manual QA or junior hybrid QA. The automation is useful supporting evidence, but this project should not be presented as advanced SDET-level framework ownership.
