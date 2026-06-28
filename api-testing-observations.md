# Basic API Testing Observations — QA Portfolio

## Purpose

This document shows basic API testing awareness using request/response validation concepts.

This is not presented as professional API testing experience, backend QA ownership, or advanced API automation. It is a self-directed QA learning artifact intended to show entry-level understanding of API testing fundamentals.

SauceDemo is primarily used here as a UI testing demo application, so this document focuses on API testing concepts, validation thinking, and how API testing would support a broader QA process.

---

## API Testing Concepts Demonstrated

| Concept                    | What It Means                                                             | QA Value                                                                         |
| -------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| HTTP method                | The type of request being sent, such as GET, POST, PUT, PATCH, or DELETE  | Helps verify the correct operation is being requested                            |
| Status code                | The numeric response result, such as 200, 201, 400, 401, 403, 404, or 500 | Helps confirm whether the request succeeded or failed correctly                  |
| Response body              | The data returned by the API                                              | Helps validate returned fields, values, and formats                              |
| Headers                    | Metadata sent with the request or response                                | Helps validate content type, authorization, caching, and other technical details |
| Request payload            | Data sent to the API in a POST, PUT, or PATCH request                     | Helps validate required fields and input rules                                   |
| Expected vs. actual result | Comparing what the API should return against what it actually returns     | Helps identify defects clearly                                                   |
| Negative testing           | Testing invalid, missing, or unauthorized requests                        | Helps verify error handling and validation rules                                 |
| Response validation        | Confirming the response contains expected fields or values                | Helps verify data accuracy and contract behavior                                 |

---

## Sample API Test Cases

| Test Case ID | Scenario                                | Request Type   | Expected Result                                          | Validation                                                     |
| ------------ | --------------------------------------- | -------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| API-001      | Retrieve a valid resource               | GET            | Response returns status `200 OK`                         | Confirm status code and expected response body fields          |
| API-002      | Retrieve a resource that does not exist | GET            | Response returns `404 Not Found` or an appropriate error | Confirm error status and useful error message                  |
| API-003      | Submit valid data                       | POST           | Response returns `201 Created` or success status         | Confirm new resource or success response                       |
| API-004      | Submit missing required fields          | POST           | Response returns `400 Bad Request` or validation error   | Confirm the response identifies missing required fields        |
| API-005      | Attempt unauthorized access             | GET/POST       | Response returns `401 Unauthorized` or `403 Forbidden`   | Confirm access is blocked                                      |
| API-006      | Validate response data format           | GET            | Response body uses expected structure                    | Confirm required fields are present and data types are correct |
| API-007      | Submit invalid data format              | POST/PUT/PATCH | Response rejects invalid data                            | Confirm validation error is returned                           |
| API-008      | Repeat request for consistency          | GET            | Repeated requests return consistent results              | Confirm response consistency when data has not changed         |

---

## Example API Bug Report Format

### Title

API returns success response when required field is missing

### Environment

| Field        | Details                                   |
| ------------ | ----------------------------------------- |
| Tool         | Postman, browser DevTools, or REST client |
| API Type     | REST                                      |
| Request Type | POST                                      |
| Test Type    | Negative API validation                   |

### Preconditions

* API endpoint is available.
* Tester has access to send requests.
* Required field rules are known.

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

| Check                | Question                                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| Status code          | Did the API return the expected status code?                              |
| Response body        | Did the response include the expected fields?                             |
| Error handling       | Did invalid input return a useful error?                                  |
| Required fields      | Were missing required fields rejected?                                    |
| Authentication       | Were unauthorized requests blocked?                                       |
| Authorization        | Were restricted actions blocked for users without permission?             |
| Data accuracy        | Did returned data match the expected values?                              |
| Data format          | Did the response use the expected data types and structure?               |
| Response consistency | Did repeated requests return consistent results?                          |
| Boundary values      | Did the API handle minimum, maximum, empty, and invalid values correctly? |

---

## How API Testing Supports UI Testing

| UI Risk                 | API Testing Value                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| Login errors            | API testing can verify authentication responses before UI validation                         |
| Incorrect product data  | API testing can help determine whether the issue comes from backend data or frontend display |
| Checkout failures       | API testing can validate whether order or checkout requests are accepted correctly           |
| Missing validation      | API testing can identify whether invalid data is blocked at the backend                      |
| Inconsistent UI results | API testing can verify whether returned data is stable and accurate                          |

---

## QA Notes

* API testing supports earlier defect discovery because problems can be found before or apart from the user interface.
* Manual API testing can be performed with tools like Postman, browser DevTools, or REST clients.
* For entry-level QA roles, basic understanding of status codes, request methods, response bodies, headers, payloads, and negative testing can be useful.
* This document is intended to show awareness and learning, not professional API testing ownership.
* No claim is made that this project includes full backend API coverage for SauceDemo.
