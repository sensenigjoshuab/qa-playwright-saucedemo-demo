# QA Playwright SauceDemo Demo

![Playwright Tests](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/actions/workflows/playwright.yml/badge.svg)

Playwright automation demo for SauceDemo covering valid login, cart behavior, checkout completion, and invalid login validation.

## Project purpose

This project demonstrates entry-level QA automation exposure by mapping manual QA test cases to basic Playwright smoke tests for a public demo e-commerce application.

## Tech stack

- JavaScript
- Node.js / npm
- Playwright Test
- GitHub Actions CI
- SauceDemo public test application
- Playwright config with CI stability settings

## Automated test coverage

| Test | Coverage |
|---|---|
| Valid login redirects to inventory page | Authentication / navigation smoke test |
| Valid user can add backpack to cart | Cart badge and button-state validation |
| Checkout flow completes successfully | Cart, customer info, checkout totals, order confirmation |
| Invalid login displays authentication error message | Negative authentication validation |

## How to run locally

```bash
npm install
npx playwright install
npm test
```

## Useful commands

```bash
npm test              # run all tests
npm run test:headed   # run tests with browser visible
npm run report        # open the Playwright HTML report
```

## CI/CD

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/playwright.yml
```

The workflow runs Playwright tests automatically on pushes, pull requests, and manual workflow dispatch. The Playwright config sets CI retries and single-worker execution for more stable runs.

## Truth scope

This is a self-directed QA automation practice project. It demonstrates basic Playwright exposure and manual-to-automation test mapping. It is not presented as paid automation QA experience or production framework ownership.
