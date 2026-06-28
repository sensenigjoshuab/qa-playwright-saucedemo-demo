\# QA Playwright SauceDemo Portfolio



!\[Playwright Tests](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/actions/workflows/playwright.yml/badge.svg)



\## Purpose



This repository is a self-directed QA portfolio project using the public SauceDemo demo application.



It demonstrates manual QA fundamentals, functional test case design, bug reporting, requirements traceability, beginner Playwright automation, Page Object Model organization, and GitHub Actions CI.



This project is not presented as paid QA employment, production QA ownership, or advanced automation framework ownership.



\---



\## What This Project Demonstrates



\- Manual functional testing

\- Positive and negative test scenarios

\- Login, cart, checkout, and order-completion validation

\- Clear expected vs. actual result documentation

\- Bug reporting through GitHub Issues

\- Requirements traceability

\- Basic accessibility-awareness observations

\- Basic API-testing concept awareness

\- Playwright automation using JavaScript

\- Page Object Model structure

\- GitHub Actions CI test execution



\---



\## Test Coverage Summary



| Area | Manual Coverage | Automation Coverage | Status |

|---|---:|---:|---|

| Valid login | Yes | Yes | Passing |

| Invalid login | Yes | Yes | Passing |

| Add to cart | Yes | Yes | Passing |

| Cart verification | Yes | Yes | Passing |

| Checkout overview | Yes | Partial | Passing |

| Checkout completion | Yes | Yes | Passing |

| Product image validation | Yes | No | Documented defect |

| Product price validation | Yes | No | Documented defect |



\---



\## Automation Structure



| Area | Details |

|---|---|

| Framework | Playwright |

| Language | JavaScript |

| Test runner | Playwright Test |

| Structure | Procedural tests + Page Object Model tests |

| CI | GitHub Actions |

| Browser install | Playwright browser setup in CI |

| Reporting | Playwright HTML/list reporter |



\---



\## Repository Files



| File / Folder | Purpose |

|---|---|

| `tests/saucedemo.spec.js` | Basic Playwright tests written directly in the spec file |

| `tests/saucedemo-pom.spec.js` | Playwright tests using Page Object Model structure |

| `pages/` | Page Object Model classes |

| `manual-test-cases.md` | Manual QA test cases and execution results |

| `requirements-traceability.md` | Requirement-to-test coverage mapping |

| `accessibility-observations.md` | Basic accessibility-awareness checklist |

| `api-testing-observations.md` | Basic API-testing concept notes |

| `recruiter-quick-view.md` | Fast summary for recruiters and hiring managers |

| `.github/workflows/playwright.yml` | GitHub Actions CI workflow |



\---



\## How to Run



```bash

npm install

npx playwright install

npm test

