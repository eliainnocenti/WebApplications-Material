# Lab 03 - APIs with Express

**Web Applications [2024/2025]**

This lab focuses on creating a basic back-end for the FilmLibrary application using the Express framework. The back-end implements a series of APIs to support the main features of the FilmLibrary: create, read, update, and delete films. The data is persistently stored in an SQLite database.

## Objectives

1. Design and implement a set of APIs to manage films.
2. Store film data persistently in an SQLite database.
3. Test the APIs using the REST Client extension for Visual Studio Code.

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

## API Design

The following APIs are implemented to manage the FilmLibrary:

### Retrieve all films

* `GET /api/films`
* Description: Get the full list of films or the films that match the optional query filter parameter `?filter=`.
* Request body: _None_
* Request query parameter: _filter_ (all, favorite, best, lastmonth, unseen)
* Response: `200 OK` (success)
* Response body: Array of objects, each describing one film.

### Retrieve a film by ID

* `GET /api/films/:id`
* Description: Get the film corresponding to the ID.
* Request body: _None_
* Response: `200 OK` (success)
* Response body: One object describing the required film.

### Create a new film

* `POST /api/films`
* Description: Create a new film. The "id" is automatically assigned by the back-end.
* Request body: JSON object describing the film (excluding the "id").

### Update an existing film

* `PUT /api/films/:id`
* Description: Update all values of an existing film, except the "id".
* Request body: JSON object describing the updated film properties.

### Mark a film as favorite/unfavorite

* `PUT /api/films/:id/favorite`
* Description: Update the "favorite" property of an existing film.
* Request body: JSON object with the "favorite" property.

### Change the rating of a film

* `POST /api/films/change-rating`
* Description: Change the rating of a film by specifying a delta value.
* Request body: JSON object with the "id" and "deltaRating" properties.

### Delete a film

* `DELETE /api/films/:id`
* Description: Delete a film by its ID.
* Request body: _None_

## Testing the APIs

1. **Open Visual Studio Code**: Open the `lab03-express` directory in Visual Studio Code.
2. **Open the API.http File**: Open the `API.http` file located in the `lab03-express` directory.
3. **Send Requests**: Use the REST Client extension to send requests to the server. Click on the "Send Request" link above each request in the `API.http` file.

### Example Requests

- **Retrieve all films**:
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

- **Mark a film as favorite/unfavorite**:
  ```http
  PUT http://localhost:3001/api/films/1/favorite HTTP/1.1
  content-type: application/json

  {
    "favorite": 1
  }
  ```

- **Change the rating of a film**:
  ```http
  POST http://localhost:3001/api/films/change-rating HTTP/1.1
  content-type: application/json

  {
    "id": 1,
    "deltaRating": 1
  }
  ```

- **Delete a film**:
  ```http
  DELETE http://localhost:3001/api/films/1 HTTP/1.1
  ```

By following this tutorial, you should be able to set up the environment and test all the implemented APIs successfully. If you encounter any issues, refer to the documentation links provided above.

## Additional Resources

- [Express Documentation](https://expressjs.com/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [REST Client Extension Documentation](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

By following this tutorial, you should be able to set up the environment and test all the implemented APIs successfully. If you encounter any issues, refer to the documentation links provided above.
