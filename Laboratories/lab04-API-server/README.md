# Lab 04 - API Server with Security Enhancements

**Web Applications [2024/2025]**

This lab focuses on creating a robust and secure API server for managing a film library. The goal is to ensure the APIs are resilient to malformed or malicious requests and adhere to best practices for security and validation.

## Objectives
1. **Enhance API Security**:
   - Prevent SQL injection by using parameterized queries.
   - Validate all input parameters using `express-validator`.
   - Ensure received parameter values are correct according to application logic.
   - Avoid race conditions by ensuring database consistency.
   - Store all data in the database, avoiding global variables.

2. **Test API Robustness**:
   - Test APIs with invalid or malicious requests (e.g., wrong IDs, invalid data).
   - Verify that APIs handle errors gracefully and return appropriate responses.

3. **Optional Tasks**:
   - Test a colleague's API server for robustness.
   - Add a search API to find films by title.

## Features
1. **SQL Injection Prevention**: All queries use parameterized statements.
2. **Input Validation**: Inputs are validated using `express-validator`.
3. **Search API**: Search films by title (optional).
4. **Error Handling**: Proper error responses for invalid inputs.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Initialize the database:
   ```bash
   sqlite3 db/films.db < db/films_autoincrement.sql
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## Testing
Use the `API.http` file to test the API endpoints. This file contains examples of valid and invalid requests to verify the robustness of the API.

## Tasks
1. **Secure the API**:
   - Review and modify the code to ensure SQL injection prevention, input validation, and logical correctness.
   - Ensure no race conditions occur and all data is stored in the database.

2. **Test the API**:
   - Design and execute tests for invalid or malicious requests.
   - Verify that the API handles errors appropriately.

3. **Optional**:
   - Test a colleague's API server.
   - Implement a search API to find films by title.

## Notes
- Ensure all APIs return meaningful error messages for invalid requests.
- Use transactions where necessary to maintain database consistency.
