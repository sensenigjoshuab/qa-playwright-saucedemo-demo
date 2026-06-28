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

## What This Portfolio Proves

| Recruiter Question | Evidence |
|---|---|
| Can this candidate execute manual QA test cases? | Yes — manual test cases cover login, cart, checkout, order completion, invalid login, locked-out login, checkout validation, visual validation, pricing validation, and defect-validation flows. |
| Can this candidate document bugs clearly? | Yes — three observed SauceDemo defects are documented using GitHub Issues. |
| Can this candidate explain expected vs. actual behavior? | Yes — bug reports include steps, expected result, actual result, severity, and impact. |
| Can this candidate use basic QA tools? | Yes — evidence includes GitHub Issues, Chrome testing, Playwright test output, GitHub Actions CI, and repository documentation. |
| Can this candidate learn automation basics? | Yes — Playwright tests use JavaScript, stable selectors, Page Object Model structure, positive flow validation, negative login validation, checkout validation, and CI execution. |
| Is the candidate honest about experience level? | Yes — the portfolio clearly identifies the work as self-directed QA practice. |

---

## Manual QA Evidence

| Area | Evidence |
|---|---|
| Valid login | Passed with `standard_user` |
| Invalid login | Error message displayed correctly |
| Locked-out login | Locked-out user error behavior validated |
| Add to cart | Cart badge updated and Remove button appeared |
| Cart verification | Product name, quantity, and price displayed correctly |
| Checkout overview | Item total, tax, and final total displayed |
| Order completion | Confirmation message displayed |
| Checkout field validation | Required first name, last name, and postal code behavior validated |
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
| Structure | Procedural tests + Page Object Model tests + validation/negative tests |
| Selectors | Uses stable `data-test` selectors in Page Object Model files and test specs |
| Coverage | Valid login, invalid login, locked-out login, cart behavior, cart verification, checkout overview validation, checkout completion, and checkout required-field validation |
| Test count | 12 Playwright tests across three spec files |
| CI result | GitHub Actions workflow configured for push, pull request, and manual runs |
| CI optimization | Workflow uses preinstalled Chrome in CI to avoid slow Playwright browser downloads |
| Public proof | GitHub repository, README badge, test files, page objects, Playwright config, and workflow file |

---

## Automated Test Files

| File | What It Shows |
|---|---|
| `tests/saucedemo.spec.js` | Core procedural Playwright tests for login, cart, checkout, and invalid login |
| `tests/saucedemo-pom.spec.js` | Same core smoke flows organized using Page Object Model classes |
| `tests/saucedemo-validation.spec.js` | Locked-out login and checkout required-field validation tests |

---

## QA Documentation Evidence

| Document | What It Shows |
|---|---|
| `test-plan.md` | Scope, risks, entry criteria, exit criteria, test types, and QA approach |
| `manual-test-cases.md` | Manual test case design, execution results, and defect mapping |
| `requirements-traceability.md` | Requirement-to-test-to-defect traceability |
| `bug-summary.md` | Defect summary, severity definitions, and risk notes |
| `accessibility-observations.md` | Basic accessibility-awareness observations |
| `api-testing-observations.md` | Basic API-testing concepts and validation thinking |

---

## Best-Fit Roles

* Manual QA Tester
* QA Analyst
* Functional Tester
* UAT Tester
* Software Tester
* Junior QA Tester
* Junior Hybrid QA Tester
* QA Support Analyst

---

## Hiring Summary

This portfolio is strongest for entry-level QA roles that value manual testing, functional testing, regression checks, UAT-style validation, written defect documentation, ticket-based workflows, traceability, QA planning, and basic automation exposure.

It shows the ability to document test cases, report defects clearly, connect requirements to testing evidence, use GitHub Issues, understand basic accessibility and API-testing concepts, and create beginner-level Playwright automation with GitHub Actions CI.

The strongest role fit is manual QA or junior hybrid QA. The automation is useful supporting evidence, but this project should not be presented as advanced SDET-level framework ownership.
