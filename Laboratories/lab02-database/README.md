# Lab 2: Database Integration

**Web Applications [2024/2025]**

In this lab, you will implement the integration between your JavaScript application and a local database.

## 1. Retrieve Data from the Database

Modify the program developed in the last lab to integrate it with a local database. To that end, the first step is to download the database provided with this lab called `films.db`. It contains a collection of films with the fields described in the first lab.

If you did not complete the first lab, you can download the proposed solution and start working from that one.

### Tasks:
Add the following asynchronous methods to the `FilmLibrary` object to retrieve data from the database. Each method should return a **Promise** that resolves to an array of `Film` objects:
1. **Get all films**: Retrieve all the films stored in the database.
2. **Get favorite films**: Retrieve all the favorite films stored in the database.
3. **Get films watched today**: Retrieve all the films watched today.
4. **Get films watched before a given date**: Retrieve films whose watch date is earlier than a given date (parametric query).
5. **Get films with a minimum rating**: Retrieve films whose rating is greater than or equal to a given number (parametric query).
6. **Get films containing a word in the title**: Retrieve films whose title contains a given string (parametric query).

### Testing:
Invoke the methods you have implemented to verify their correctness and print the results.

## 2. Modify the Data Stored in the Database

Add a set of methods to the `FilmLibrary` object to manipulate the data stored in the database.

### Tasks:
Implement the following functionalities and invoke them to verify their correctness:
1. **Add a new film**: Store a new film into the database. Print a confirmation or failure message.
2. **Delete a film**: Delete a film from the database using its ID as a reference. Print a confirmation or failure message.
3. **Reset watch dates**: Delete the watch date of all the films stored in the database. Print a confirmation or failure message.

### Important Note:
Before implementing this exercise, create a copy of the local database file since, if correctly implemented, the methods will permanently modify the content of the database.

## Hints

1. The file `films.db` is included in the repository available on GitHub:  
   [Lab 2 Code Repository](https://github.com/polito-WA-2025/labs-code/tree/main/lab02-database)

2. If you prefer, you can use the available Lab 1 solution as a starting point:  
   [Lab 1 Code Repository](https://github.com/polito-WA-2025/labs-code/tree/main/lab01-node)

3. Use the SQLite database by means of the `sqlite3` module:  
   [sqlite3 npm package](https://www.npmjs.com/package/sqlite3)  
   **Note**: In some systems, you may need to install native libraries or tools. Check for potential error messages during `npm install`.

4. To browse the content of the database, you can use one of the following tools:
   - **Visual Studio Code SQLite Extension**:  
     [VSCode SQLite Extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)  
     **Note**: In Linux, you may need to install the `sqlite3` native software package of your Linux distribution to make it work.
   - **DB Browser for SQLite**:  
     [DB Browser for SQLite](https://sqlitebrowser.org/dl/)
