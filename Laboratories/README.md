# Laboratories

This folder contains all lab assignments for the Web Applications course. Labs are designed to provide hands-on experience and complement the lecture topics.

## Overview

- **Lab Objectives:**
  - Develop practical skills in Node.js, Express, database management, React, and front-end development.
  - Learn how to build and test web applications in real-world scenarios.
  - Understand API design, routing, middleware, basic security practices, and responsive web design.

## Lab Structure

- **lab01-node**
  - *What is about:*
    - Introduction to Node.js and basic scripting.
    - Exercises to help set up and familiarize with Node.js.
  - PDF guide ([`lab01-getting-started-node.pdf`](lab01-node/resources/lab01-getting-started-node.pdf))
  - [`README.md`](lab01-node/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab01-node` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `node index.js` (or the main script file for the lab).
    3. Follow the instructions in the lab to test the implemented functionalities.

- **lab02-database**
  - *What is about:*
    - Integrating databases using SQLite.
    - Scripts for managing a film library database.
  - PDF guide ([`lab02-node-database.pdf`](lab02-database/resources/lab02-node-database.pdf))
  - [`README.md`](lab02-database/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab02-database` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - Ensure the `films.db` file is in the correct location.
       - Use `node` to execute the scripts and test database queries (e.g., `node script.js`).

- **lab03-express**
  - *What is about:*
    - Building RESTful APIs using Express.
    - Example routes, API files (`API.http`), and setup instructions.
  - PDF guide ([`lab03-express.pdf`](lab03-express/resources/lab03-express.pdf))
  - [`README.md`](lab03-express/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab03-express` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `node index.js` to start the server.
    3. Use the `API.http` file with the REST Client extension in Visual Studio Code to test the APIs.

- **lab04-API-server**
  - *What is about:*
    - Enhancing the security and robustness of the API server.
    - Input validation using `express-validator` and prevention of SQL injection.
    - Adding a search API to retrieve films by title.
    - Testing for invalid and malicious requests.
  - PDF guide ([`lab04-API-server.pdf`](lab04-API-server/resources/lab04-API-server.pdf))
  - [`README.md`](lab04-API-server/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab04-API-server` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `node index.js` to start the server.
    3. Use the `API.http` file with the REST Client extension in Visual Studio Code to test the APIs.

- **lab05-html-css**
  - *What is about:*
    - Front-end development using HTML, CSS, and Bootstrap.
    - Creating a static, responsive webpage for the Film Library.
    - Layout design, styling, and responsive behavior using Bootstrap.
  - PDF guide ([`lab05-html-css.pdf`](lab05-html-css/resources/lab05-html-css.pdf))
  - [`README.md`](lab05-html-css/README.md)
  - *How to test it:*
    1. Open the `index.html` file in a web browser.
    2. Verify the layout, styling, and responsiveness of the webpage.

- **lab06-js-browser**
  - *What is about:*
    - Adding dynamic behaviors to the Film Library interface using JavaScript.
    - Implementing filtering functionality and optional deletion of films.
  - PDF guide ([`lab06-js-browser.pdf`](lab06-js-browser/resources/lab06-js-browser.pdf))
  - [`README.md`](lab06-js-browser/README.md)
  - *How to test it:*
    1. Open the `index.html` file in a web browser.
    2. Ensure the `films.js` and `app.js` files are correctly linked in the HTML.
    3. Test the dynamic behaviors (e.g., filtering) in the browser.

- **lab07-react**
  - *What is about:*
    - Setting up a React-based front-end for the Film Library.
    - Dividing the application into components and defining props.
    - Implementing a static list of films and filters.
  - PDF guide ([`lab07-getting-started-react.pdf`](lab07-react/resources/lab07-getting-started-react.pdf))
  - [`README.md`](lab07-react/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab07-react` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `npm run dev` to start the development server.
    3. Open the application in a web browser at the URL provided by Vite.

- **lab08-state**
  - *What is about:*
    - Using React state to implement dynamic UI filters.
    - Adding a delete functionality to manage the film list.
    - Enhancing the Film Library application with React components and state management.
  - PDF guide ([`lab08-react-state.pdf`](lab08-state/resources/lab08-react-state.pdf))
  - [`README.md`](lab08-state/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab08-state` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `npm run dev` to start the development server.
    3. Open the application in a web browser at the URL provided by Vite.
    4. Test the filters by interacting with the sidebar options and verifying the displayed films.
    5. Test the delete functionality by clicking the delete button for a film and ensuring it is removed from the list.

- **lab09-forms**
  - *What is about:*
    - Adding interactive functionalities to the FilmLibrary application using React forms.
    - Enabling users to create and edit films dynamically.
    - Optionally validating user inputs during form submission.
  - PDF guide ([`lab09-react-forms.pdf`](lab09-forms/resources/lab09-react-forms.pdf))
  - [`README.md`](lab09-forms/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab09-forms` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `npm run dev` to start the development server.
    3. Open the application in a web browser at the URL provided by Vite.
    4. Test the "Add a New Film" and "Edit an Existing Film" functionalities.
    5. Verify the optional validation by submitting invalid inputs and observing the error messages.

- **lab10-routes**
  - *What is about:*
    - Adding multiple pages to the FilmLibrary application using React Router.
    - Implementing inline editing for specific film properties.
  - PDF guide ([`lab10-router.pdf`](lab10-routes/resources/lab10-router.pdf))
  - [`README.md`](lab10-routes/README.md)
  - *How to test it:*
    1. Open a terminal and navigate to the `lab10-routes` folder.
    2. Run the following commands:
       - `npm install` (if `package-lock.json` is present).
       - `npm run dev` to start the development server.
    3. Open the application in a web browser at the URL provided by Vite.
    4. Test the routing by navigating between the add film, edit film, and filter routes.
    5. Test inline editing by toggling the favorite status and changing the rating of films directly from the main page.

## How to Proceed

1. **Review Lab Instructions:** Each lab folder contains detailed instructions in its README or accompanying documentation.
2. **Setup the Environment:** Follow the setup guidelines to install necessary dependencies and configure the development environment.
3. **Complete the Exercises:** Work through the labs during class sessions or as homework, and refer to the provided resources if difficulties are encountered.
4. **Seek Help:** For any questions, use the course’s communication channels.
