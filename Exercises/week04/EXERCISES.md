# Exercise 4: Q&A API Server

_Goal: Building an API Server for the Q&A example_

Design and implement an HTTP API server in Express for the Q&A example. Starting from the template project `qa-server` available in the folder:

- Define a set of HTTP APIs for each of the common operations on Questions and Answers, write them in the `README.md` file.
    - Operations may be actions such as list, create, add, modify, ...
    - For each API, define the HTTP method, the URL (with parameters), the Request Body (if any), the Response Body (if any), the status code(s) in case of success or failure (with the corresponding error body).
- Implement an HTTP server using Express. Such server must be able to respond to the HTTP URLs defined in the APIs, execute the proper SQL queries on the database, and return the result in JSON format.
    - Remember the server-side validation of input values, and ensure database integrity.
- Test the HTTP server using a client such as RESTClient (e.g., writing a .http file and running requests against the server)

Files:
- `qa-server/index.js`
- `qa-server/dao.js`
- `qa-server/create_sqlite_all_data.sql`
- `qa-server/API.http`

Note: the API **Design** phase **does not have a single solution**, there are many options to explore, with their pros and cons. We will discuss some of them during the design phase.

# Exercise 4a: Buggy SQL Injection

_Goal: Understand and fix SQL injection vulnerabilities_

Description:
- Analyze the provided `qa-server-BUGGY-SQL-injection` project.
- Identify the SQL injection vulnerabilities.
- Fix the vulnerabilities by using parameterized queries.

Files:
- `qa-server-BUGGY-SQL-injection/index.js`
- `qa-server-BUGGY-SQL-injection/dao.js`
- `qa-server-BUGGY-SQL-injection/create_sqlite_all_data.sql`
- `qa-server-BUGGY-SQL-injection/API.http`
