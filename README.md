# QA Playwright SauceDemo Portfolio

![Playwright Tests](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/actions/workflows/playwright.yml/badge.svg)

## Purpose

This repository is a self-directed QA portfolio project using the public SauceDemo demo application.

It demonstrates manual QA fundamentals, functional test case design, bug reporting, requirements traceability, QA test planning, defect documentation, beginner Playwright automation, Page Object Model organization, GitHub Actions CI, and clear separation between manual coverage, automated regression coverage, and documented defects.

This project is not presented as paid QA employment, production QA ownership, or advanced automation framework ownership.

---

## Portfolio Positioning

| Viewer Type | What This Repository Shows |
|---|---|
| Recruiter | Clear QA portfolio evidence, readable documentation, and role fit for entry-level QA roles |
| QA Lead | Manual test design, expected vs. actual analysis, defect documentation, severity reasoning, and traceability |
| Technical Reviewer | Playwright automation, JavaScript test files, Page Object Model structure, stable selectors, and CI execution |
| Hiring Manager | Practical testing judgment, communication clarity, and honest scope control |

---

## What This Project Demonstrates

- Manual functional testing
- Positive and negative test scenarios
- Login, locked-out login, cart, checkout, validation, inventory sorting, product-detail, and order-completion testing
- Clear expected vs. actual result documentation
- Bug reporting through GitHub Issues
- Requirements traceability
- QA test planning
- Defect summary documentation
- Basic accessibility-awareness observations
- Basic API-testing concept awareness
- Playwright automation using JavaScript
- Page Object Model structure
- GitHub Actions CI test execution
- Honest explanation of current limitations and future improvements

---

## Application Under Test

| Field | Details |
|---|---|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Application Type | Public demo e-commerce web application |
| Primary Testing Focus | Manual functional QA with beginner automation support |
| Automation Tool | Playwright |
| Automation Language | JavaScript |
| CI Tool | GitHub Actions |

---

## Test Coverage Summary

| Area | Manual Coverage | Automation Coverage | Status |
|---|---:|---:|---|
| Valid login | Yes | Yes | Passing |
| Invalid login | Yes | Yes | Passing |
| Locked-out login | Yes | Yes | Passing |
| Add to cart | Yes | Yes | Passing |
| Remove from cart | Yes | Yes | Passing |
| Cart verification | Yes | Yes | Passing |
| Checkout overview | Yes | Partial | Passing |
| Checkout completion | Yes | Yes | Passing |
| Checkout First Name validation | Yes | Yes | Passing |
| Checkout Last Name validation | Yes | Yes | Passing |
| Checkout Postal Code validation | Yes | Yes | Passing |
| Inventory name sorting | Yes | Yes | Passing |
| Inventory price sorting | Yes | Yes | Passing |
| Product detail navigation | Yes | Yes | Passing |
| Product image validation | Yes | No | Documented defect |
| Product price validation | Yes | No | Documented defect |
| `problem_user` checkout input defect | Yes | No | Documented defect |

---

## Automation Structure

| Area | Details |
|---|---|
| Framework | Playwright |
| Language | JavaScript |
| Test Runner | Playwright Test |
| Structure | Procedural tests + Page Object Model tests + validation/negative tests + inventory regression tests |
| Test Count | 16 Playwright tests across 4 spec files after the inventory regression file is added |
| CI | GitHub Actions |
| Reporting | Playwright HTML/list reporter |
| Selector Strategy | Uses stable `data-test` selectors where practical |

---

## Automated Test Files

| Spec File | Purpose |
|---|---|
| `tests/saucedemo.spec.js` | Core procedural Playwright tests for login, cart, checkout, and invalid login |
| `tests/saucedemo-pom.spec.js` | Core smoke flows organized using Page Object Model classes |
| `tests/saucedemo-validation.spec.js` | Locked-out login and checkout required-field validation tests |
| `tests/saucedemo-inventory.spec.js` | Inventory regression tests for cart removal, sorting, and product-detail navigation |

---

## Repository Files

| File / Folder | Purpose |
|---|---|
| `README.md` | Main project overview |
| `qa-evidence-index.md` | Fast map of portfolio evidence by viewer type |
| `docs/screenshots.md` | Screenshot evidence index linking documented defects to GitHub Issue evidence |
| `automation-strategy.md` | Automation scope, selector strategy, CI notes, and limitations |
| `test-plan.md` | QA planning scope, risks, entry/exit criteria, and test approach |
| `manual-test-cases.md` | Manual QA test cases, execution results, and automation coverage mapping |
| `requirements-traceability.md` | Requirement-to-test-to-defect traceability |
| `bug-summary.md` | Summary of documented defects, severity, status, and related test cases |
| `accessibility-observations.md` | Basic accessibility-awareness checklist |
| `api-testing-observations.md` | Basic API-testing concept notes |
| `recruiter-quick-view.md` | Fast summary for recruiters and hiring managers |
| `tests/` | Playwright automated test files |
| `pages/` | Page Object Model classes |
| `playwright.config.js` | Playwright configuration |
| `.github/workflows/playwright.yml` | GitHub Actions CI workflow |
| `.gitignore` | Keeps local dependencies and generated test artifacts out of the repository |

---

## How to Run Locally

Install dependencies:

```bash
npm install
