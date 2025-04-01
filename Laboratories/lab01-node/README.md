# Lab 1: Getting Started with Node.js

**Web Applications [2024/2025]**

In this lab, you will become familiar with JavaScript by putting into practice what you have seen in the last lectures.

## 0. Preparation and Warm-up Exercise

Before starting, ensure that **Visual Studio Code** and **Node.js** are correctly installed on your computer. Refer to the course slides for instructions if necessary.

> **Note:** At exam time, assignments will be evaluated using Node.js on Linux. If you develop on Windows, it is recommended to configure Node.js inside **Windows Subsystem for Linux (WSL) 2**. See instructions in the first set of course slides.

### Task:
Create a function that, given an array of strings, computes and prints a new string for each input string:
- If the string is shorter than 2 characters, print an empty string.
- If the string is 2 or 3 characters long, print the same character twice.
- Otherwise, print a new string composed of the first two and last two characters.

Example:
- Input: `['spring', 'it', 'cat', 'a']`
- Output: `['spng', 'itit', 'caat', '']`

Write test instructions to call the function with a variety of strings and verify the correctness of the results.

## 1. Create a Film Library

### Film Object:
Each film is represented by the following fields:
- **id**: A unique numerical identifier (mandatory).
- **title**: The film's title (mandatory).
- **favorite**: A Boolean value indicating if the film is a favorite (default: `false`).
- **watchDate**: The date the film was watched (optional).
- **rating**: A numerical value between 1 and 5 representing the film's rating (optional).

### FilmLibrary Object:
A FilmLibrary is an object containing an array of films. Implement the following:
1. A constructor function to create Film objects.
2. A constructor function to create a FilmLibrary object.
3. An `addNewFilm` method to add a Film object to the FilmLibrary.
4. A `print` method to display all films in the library.

### Example Films:
- Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2023, Score: 5
- Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2023, Score: 4
- Id: 3, Title: Star Wars, Favorite: false, Watch date: <not defined>, Score: <not assigned>
- Id: 4, Title: Matrix, Favorite: false, Watch date: <not defined>, Score: <not assigned>
- Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2023, Score: 3

## 2. Add Functionalities to the Film Library

Enhance the FilmLibrary with the following methods:
1. **sortByDate**: Returns a new array of films sorted by watch date (ascending). Unwatched films are placed at the end.
2. **deleteFilm**: Deletes a film from the library based on its id.
3. **resetWatchedFilms**: Removes the watch date from all films in the library.
4. **getRated**: Returns films with a defined score, sorted by decreasing score.

### Example Outputs:
#### Sorted by Date:
```
***** List of films *****
Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2023, Score: 5
Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2023, Score: 4
Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2023, Score: 3
Id: 3, Title: Star Wars, Favorite: false, Watch date: <not defined>, Score: <not assigned>
Id: 4, Title: Matrix, Favorite: false, Watch date: <not defined>, Score: <not assigned>
```

#### Rated Films:
```
***** Films filtered, only the rated ones *****
Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2023, Score: 5
Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2023, Score: 4
Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2023, Score: 3
```

Test these methods by invoking them on the FilmLibrary instance created in Exercise 1.

## Hints:
- Use the **day.js** library to handle dates.
- Leverage functional programming paradigms (e.g., `map`, `filter`, `sort`) to manipulate the array of films.
