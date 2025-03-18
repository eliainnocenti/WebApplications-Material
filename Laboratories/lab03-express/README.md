# Lab 03 - Express API Testing Tutorial

This tutorial will guide you through setting up the environment and testing the implemented APIs using the REST Client extension for Visual Studio Code.

## Prerequisites

1. **Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. **SQLite**: Install SQLite on your machine. You can download it from [sqlite.org](https://www.sqlite.org/download.html).

3. **Visual Studio Code**: Install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com/).

4. **REST Client Extension**: Install the REST Client extension for Visual Studio Code from [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

5. **SQLite Extensions for VSCode**: Optionally, you can install SQLite extensions for Visual Studio Code to browse the database:
   - [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
   - [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)

## Setup

1. **Clone the Repository**: Clone the repository containing the lab files to your local machine.

   ```sh
   git clone https://github.com/polito-WA-2024/labs-code.git
   cd labs-code/lab03-express
   ```

2. **Install Dependencies**: Install the required npm packages.

   ```sh
   npm install
   ```

3. **Database Setup**: Ensure you have the `films.db` file in the `db` directory. If not, you can recreate it using the script provided in the repository.

4. **Start the Server**: Start the Express server.

   ```sh
   node index.js
   ```

## Testing the APIs

1. **Open Visual Studio Code**: Open the `lab03-express` directory in Visual Studio Code.

2. **Open the API.http File**: Open the `API.http` file located in the `lab03-express` directory.

3. **Send Requests**: Use the REST Client extension to send requests to the server. You will see a "Send Request" link above each request in the `API.http` file. Click on the link to send the request.

   ### Example Requests

   - **Retrieve all the films**:
     ```http
     GET http://localhost:3001/api/films HTTP/1.1
     ```

   - **Create a new film**:
     ```http
     POST http://localhost:3001/api/films HTTP/1.1
     content-type: application/json

     {
       "title": "Guardians of the Galaxy Vol.3",
       "favorite": 1,
       "watchDate": "2024-02-09",
       "rating": 4
     }
     ```

   - **Mark an existing film as favorite/unfavorite**:
     ```http
     PUT http://localhost:3001/api/films/1/favorite HTTP/1.1
     content-type: application/json

     {
       "favorite": 1
     }
     ```

   - **Change the rating of a specific film**:
     ```http
     PUT http://localhost:3001/api/films/1/rating HTTP/1.1
     content-type: application/json

     {
       "delta": 1
     }
     ```

   - **Delete an existing film**:
     ```http
     DELETE http://localhost:3001/api/films/1 HTTP/1.1
     ```

   - **Update an existing film**:
     ```http
     PUT http://localhost:3001/api/films/1 HTTP/1.1
     content-type: application/json

     {
       "title": "Guardians of the Galaxy Vol.3",
       "favorite": 1,
       "watchDate": "2024-02-09",
       "rating": 4
     }
     ```

## Additional Resources

- [Express Documentation](https://expressjs.com/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [REST Client Extension Documentation](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

By following this tutorial, you should be able to set up the environment and test all the implemented APIs successfully. If you encounter any issues, refer to the documentation links provided above.
