# Recruiter Quick View — QA Portfolio

## Candidate

**Joshua Sensenig**

Manual QA Tester / QA Analyst / Functional Tester / Junior Hybrid QA Tester

Remote QA | Async Collaboration | Available for Scheduled Meetings

---

## Portfolio Purpose

This portfolio demonstrates self-directed QA practice using the public SauceDemo demo application and a personal Playwright automation project.

It is not presented as paid QA employment, production QA ownership, or professional automation framework ownership.

---

## Fast Hiring Summary

This repository is strongest evidence for entry-level QA roles that value manual testing, functional testing, regression checks, UAT-style validation, written defect documentation, ticket-based workflows, traceability, QA planning, and basic automation exposure.

It shows that the candidate can document test cases, report defects clearly, connect requirements to testing evidence, use GitHub Issues, understand basic accessibility and API-testing concepts, and create beginner-to-junior-level Playwright automation with GitHub Actions CI.

The strongest role fit is manual QA or junior hybrid QA. The automation is useful supporting evidence, but this project should not be presented as advanced SDET-level framework ownership.

---

## What This Portfolio Proves

| Recruiter Question | Evidence |
|---|---|
| Can this candidate execute manual QA test cases? | Yes — manual test cases cover login, cart, checkout, order completion, invalid login, locked-out login, checkout validation, inventory sorting, product details, visual validation, pricing validation, and defect-validation flows. |
| Can this candidate document bugs clearly? | Yes — observed SauceDemo defects are documented using GitHub Issues and supporting defect-summary documentation. |
| Can this candidate explain expected vs. actual behavior? | Yes — defect documentation includes steps, expected result, actual result, severity, priority, impact, workaround, and related test case. |
| Can this candidate use basic QA tools? | Yes — evidence includes GitHub Issues, Chrome testing, Playwright test output, GitHub Actions CI, and repository documentation. |
| Can this candidate learn automation basics? | Yes — Playwright tests use JavaScript, stable selectors, Page Object Model structure, positive flow validation, negative login validation, checkout validation, inventory sorting, cart removal, and CI execution. |
| Is the candidate honest about experience level? | Yes — the portfolio clearly identifies the work as self-directed QA practice and beginner-to-junior-level automation exposure. |

---

## Manual QA Evidence

| Area | Evidence |
|---|---|
| Valid login | Passed with `standard_user` |
| Invalid login | Error message displayed correctly |
| Locked-out login | Locked-out user error behavior validated |
| Add to cart | Cart badge updated and Remove button appeared |
| Remove from cart | Cart item and cart badge were cleared |
| Cart verification | Product name, quantity, and price displayed correctly |
| Checkout overview | Item total, tax, and final total displayed |
| Order completion | Confirmation message displayed |
| Checkout field validation | Required first name, last name, and postal code behavior validated |
| Inventory sorting | Name and price sorting behavior validated |
| Product detail navigation | Product detail page navigation validated |
| Defect validation | Issues documented for visual, pricing, and checkout-input defects |

---

## Defect Documentation Evidence

| Defect | Severity | Evidence |
|---|---|---|
| Product images display incorrectly for `problem_user` | Medium | GitHub Issue #1 |
| Product prices display incorrectly for `visual_user` | High | GitHub Issue #2 |
| Checkout Last Name field does not accept input for `problem_user` | High | GitHub Issue #3 |

---

## Automation Evidence

| Area | Evidence |
|---|---|
| Framework | Playwright |
| Language | JavaScript |
| Structure | Procedural tests + Page Object Model tests + validation/negative tests + inventory regression tests |
| Selectors | Uses stable `data-test` selectors where practical |
| Coverage | Valid login, invalid login, locked-out login, cart behavior, cart verification, checkout overview validation, checkout completion, checkout required-field validation, cart removal, inventory sorting, and product-detail navigation |
| Test Count | 16 Playwright tests across four spec files after the inventory regression file is added |
| CI Result | GitHub Actions workflow configured for push, pull request, and manual runs |
| Public Proof | GitHub repository, README badge, test files, page objects, Playwright config, and workflow file |

---

## Automated Test Files

| File | What It Shows |
|---|---|
| `tests/saucedemo.spec.js` | Core procedural Playwright tests for login, cart, checkout, and invalid login |
| `tests/saucedemo-pom.spec.js` | Same core smoke flows organized using Page Object Model classes |
| `tests/saucedemo-validation.spec.js` | Locked-out login and checkout required-field validation tests |
| `tests/saucedemo-inventory.spec.js` | Additional inventory regression coverage for cart removal, sorting, and product-detail navigation |

---

## QA Documentation Evidence

| Document | What It Shows |
|---|---|
| `qa-evidence-index.md` | Viewer-specific map of portfolio evidence |
| `automation-strategy.md` | Automation scope, selector choices, CI strategy, and limitations |
| `test-plan.md` | Scope, risks, entry criteria, exit criteria, test types, and QA approach |
| `manual-test-cases.md` | Manual test case design, execution results, and defect mapping |
| `requirements-traceability.md` | Requirement-to-test-to-defect traceability |
| `bug-summary.md` | Defect summary, severity definitions, and risk notes |
| `accessibility-observations.md` | Basic accessibility-awareness observations |
| `api-testing-observations.md` | Basic API-testing concepts and validation thinking |

---

## Best-Fit Roles

- Manual QA Tester
- QA Analyst
- Functional Tester
- UAT Tester
- Software Tester
- Junior QA Tester
- Junior Hybrid QA Tester
- QA Support Analyst

---

## Interview Talking Points

- I built this as a self-directed QA portfolio project, not as paid client work.
- I separated manual coverage, automation coverage, and documented defects so the project is honest and easy to review.
- I used GitHub Issues to document expected vs. actual behavior, severity, priority, impact, and related test cases.
- I added Playwright automation for repeatable smoke and regression scenarios.
- I used Page Object Model structure to show that I understand maintainable test organization at a beginner-to-junior level.
