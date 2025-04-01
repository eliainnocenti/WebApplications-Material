/* 
 * [2024/2025]
 * Web Applications
 * Lab 1 - Exercise 1
 */

'use strict';
const dayjs = require("dayjs");

// Constructor function for Film objects
// Represents a film with id, title, favorite status, watch date, and rating
function Film(id, title, isFavorite = false, watchDate, rating) {
  this.id = id; // Unique numerical id
  this.title = title; // Film title
  this.favorite = isFavorite; // Boolean value to represent if it's a favorite
  this.rating = rating; // Numerical rating between 1 and 5
  // Saved as dayjs object only if watchDate is truthy
  this.watchDate = watchDate && dayjs(watchDate);

  // Method to return a string representation of the film
  this.toString = () => {
    return `Id: ${this.id}, ` +
    `Title: ${this.title}, Favorite: ${this.favorite}, ` +
    `Watch date: ${this.formatWatchDate('MMMM D, YYYY')}, ` +
    `Score: ${this.formatRating()}` ;
  }

  // Method to format the watch date
  this.formatWatchDate = (format) => {
    return this.watchDate ? this.watchDate.format(format) : '<not defined>';
  }

  // Method to format the rating
  this.formatRating = () => {
    return this.rating ? this.rating : '<not assigned>';
  }
}

// Constructor function for FilmLibrary
// Represents a collection of films with methods to manage them
function FilmLibrary() {
  this.list = []; // Array to store films

  // Method to add a new film to the library
  this.addNewFilm = (film) => {
    if(!this.list.some(f => f.id == film.id))
      this.list.push(film);
    else
      throw new Error('Duplicated id');
  };

  // Method to print all films in the library
  this.print = () => {
    console.log("***** List of films *****");
    this.list.forEach((item) => console.log(item.toString()));
  }
}

// Main function to demonstrate the FilmLibrary functionality
// Creates films, adds them to the library, and prints the library
function main() {
  // Creating some film entries
  const f1 = new Film(1, "Pulp Fiction", true, "2023-03-10", 5);
  const f2 = new Film(2, "21 Grams", true, "2023-03-17", 4);
  const f3 = new Film(3, "Star Wars", false);
  const f4 = new Film(4, "Matrix");
  const f5 = new Film(5, "Shrek", false, "2023-03-21", 3);

  // Adding the films to the FilmLibrary
  const library = new FilmLibrary();
  library.addNewFilm(f1);
  library.addNewFilm(f2);
  library.addNewFilm(f3);
  library.addNewFilm(f4);
  library.addNewFilm(f5);

  // Print Films
  library.print();

  // Additional instruction to enable debug 
  debugger;
}

main();
