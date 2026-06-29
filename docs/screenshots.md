# Screenshot Evidence Index

This document maps the portfolio's documented defects to the visual evidence attached in GitHub Issues.

The screenshots are stored directly in issue comments so reviewers can see the defect report, severity/priority assessment, labels, and supporting evidence in one place.

## Evidence Summary

| Bug ID | Area | Test Account | Evidence Location | What the Screenshot Proves |
|---|---|---|---|---|
| BUG-001 | Inventory / Product Images | `problem_user` | [Issue #1](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/issues/1) | Multiple inventory products display incorrect product images. |
| BUG-002 | Inventory / Product Pricing | `visual_user` | [Issue #2](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/issues/2) | Inventory product prices display incorrect or unexpected values. |
| BUG-003 | Checkout / Customer Information | `problem_user` | [Issue #3](https://github.com/sensenigjoshuab/qa-playwright-saucedemo-demo/issues/3) | Checkout displays `Error: Last Name is required` after valid checkout information is entered, blocking the flow. |

## Reviewer Notes

- Each screenshot is attached to the matching GitHub Issue comment.
- Each issue includes structured QA documentation: summary, environment, preconditions, reproduction steps, expected result, actual result, severity, priority, impact, workaround, related test case, and related requirement.
- This evidence supports manual QA traceability between observed behavior, documented defects, and test case coverage.

## Related Files

- [`manual-test-cases.md`](../manual-test-cases.md)
- [`bug-summary.md`](../bug-summary.md)
- [`requirements-traceability.md`](../requirements-traceability.md)
- [`qa-evidence-index.md`](../qa-evidence-index.md)
