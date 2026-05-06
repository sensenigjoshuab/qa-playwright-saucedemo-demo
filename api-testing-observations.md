# Basic API Testing Observations — QA Portfolio

## Purpose

This document shows basic API testing awareness using simple request/response validation concepts.

This is not presented as professional API testing experience, backend QA ownership, or advanced API automation. It is a self-directed QA learning artifact intended to show entry-level understanding of API testing fundamentals.

---

## API Testing Concepts Demonstrated

| Concept | What It Means |
|---|---|
| HTTP method | The type of request being sent, such as GET, POST, PUT, PATCH, or DELETE |
| Status code | The numeric response result, such as 200, 201, 400, 401, 404, or 500 |
| Response body | The data returned by the API |
| Headers | Metadata sent with the request or response |
| Expected vs. actual result | Comparing what the API should return against what it actually returns |
| Negative testing | Testing invalid or unauthorized requests |
| Response validation | Confirming the response contains expected fields or values |

---

## Sample API Test Cases

| Test Case ID | Scenario | Request Type | Expected Result | Validation |
|---|---|---|---|---|
| API-001 | Retrieve a valid resource | GET | Response returns status `200 OK` | Confirm status code and expected response body fields |
| API-002 | Retrieve a resource that does not exist | GET | Response returns `404 Not Found` or appropriate error | Confirm error status and message |
| API-003 | Submit valid data | POST | Response returns `201 Created` or success status | Confirm new resource or success response |
| API-004 | Submit missing required fields | POST | Response returns `400 Bad Request` or validation error | Confirm error message identifies missing fields |
| API-005 | Attempt unauthorized access | GET/POST | Response returns `401 Unauthorized` or `403 Forbidden` | Confirm access is blocked |
| API-006 | Validate response data format | GET | Response body uses expected data structure | Confirm required fields are present |

---

## Example API Bug Report Format

### Title

API returns success response when required field is missing

### Environment

| Field | Details |
|---|---|
| Tool | Postman or browser DevTools |
| API Type | REST |
| Request Type | POST |
| Test Type | Negative API validation |

### Preconditions

- API endpoint is available.
- Tester has access to send requests.
- Required field rules are known.

### Steps to Reproduce

1. Open the API request in Postman or another API client.
2. Select the POST request.
3. Remove one required field from the request body.
4. Send the request.
5. Review the response status code and response body.

### Expected Result

The API should reject the request and return a validation error, such as `400 Bad Request`, explaining which required field is missing.

### Actual Result

The API returns a success response even though required data is missing.

### Severity

High

### Impact

Invalid or incomplete data may be accepted by the system, which can cause data quality issues, downstream errors, or incorrect user-facing behavior.

---

## Sample API Validation Checklist

| Check | Question |
|---|---|
| Status code | Did the API return the expected status code? |
| Response body | Did the response include the expected fields? |
| Error handling | Did invalid input return a useful error? |
| Required fields | Were missing required fields rejected? |
| Authentication | Were unauthorized requests blocked? |
| Data accuracy | Did returned data match the expected values? |
| Response consistency | Did repeated requests return consistent results? |

---

## QA Notes

- API testing supports earlier defect discovery because problems can be found before or apart from the user interface.
- Manual API testing can be performed with tools like Postman, browser DevTools, or REST clients.
- For entry-level QA roles, basic understanding of status codes, request methods, response bodies, and negative testing can be useful.
- This document is intended to show awareness and learning, not professional API testing ownership.
