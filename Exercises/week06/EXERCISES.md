# Exercise 6: Backend API for Q&A Application

In this exercise, you will implement a backend API for a Q&A application. The API will allow users to manage questions and answers in a database.

## Objectives

1. **API Development**:
   - Implement RESTful APIs to manage questions and answers.
   - Use Express.js for the server and SQLite for the database.

2. **Database Setup**:
   - Initialize the database using the provided SQL scripts.

3. **Validation and Error Handling**:
   - Validate API inputs using `express-validator`.
   - Handle errors gracefully and return appropriate HTTP status codes.

## Tasks

1. **Set Up the Server**:
   - Use the provided `index.js` file to set up the Express server.
   - Implement the APIs as described in `API.md`.

2. **Database Integration**:
   - Use the `dao.js` file to interact with the SQLite database.
   - Test the database queries using the `API.http` file.

3. **Testing**:
   - Test the APIs using the `API.http` file.
   - Verify that all endpoints work as expected.

4. **Security**:
   - Sanitize user inputs to prevent SQL injection and XSS attacks.
   - Implement a Content Security Policy (CSP) in the server.

## Deliverables

- A working backend API for the Q&A application.
- A report describing the implementation process and any challenges faced.
