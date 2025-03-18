/* 
 * [2024/2025]
 * Web Applications
 * Lab 1 - Exercise 2
 */

'use strict';
const dayjs = require("dayjs");

// Film constructor function
function Film(id, title, isFavorite = false, watchDate, rating) {
  this.id = id;
  this.title = title;
  this.favorite = isFavorite;
  this.rating = rating;
  // saved as dayjs object only if watchDate is truthy
  this.watchDate = watchDate && dayjs(watchDate);

  // Method to convert film details to string
  this.toString = () => {
    return `Id: ${this.id}, ` +
    `Title: ${this.title}, Favorite: ${this.favorite}, ` +
    `Watch date: ${this.formatWatchDate('MMMM D, YYYY')}, ` +
    `Score: ${this.formatRating()}` ;
  }

  // Method to format watch date
  this.formatWatchDate = (format) => {
    return this.watchDate ? this.watchDate.format(format) : '<not defined>';
  }

  // Method to format rating
  this.formatRating = () => {
    return this.rating  ? this.rating : '<not assigned>';
  }
}

// FilmLibrary constructor function
function FilmLibrary() {
  this.list = [];

  // Method to print all films
  this.print = () => {
    console.log("***** List of films *****");
    this.list.forEach((item) => console.log(item.toString()));
  }

  // Method to add a new film
  this.addNewFilm = (film) => {
    if(!this.list.some(f => f.id == film.id))
      this.list.push(film);
    else
      throw new Error('Duplicate id');
  };

  // Method to delete a film by id
  this.deleteFilm = (id) => {
    const newList = this.list.filter(film => film.id !== id);
    this.list = newList;
  }

  // Method to reset watch dates of all films
  this.resetWatchedFilms = () => {
    this.list.forEach((film) => delete film.watchDate);
  }

  // Method to get films with a rating, sorted by rating
  this.getRated = () => {
    const newList = this.list.filter(film => film.rating > 0)
                             .sort((d1, d2) => d2.rating - d1.rating);
    return newList;
  }

  // Method to sort films by watch date
  this.sortByDate = () => {
    const newArray = [...this.list];
    newArray.sort((d1, d2) => {
      if(!d1.watchDate) return 1;   // null/empty watchDate d1 is the higher value
      else if(!d2.watchDate) return -1;
      return d1.watchDate.diff(d2.watchDate, 'day');
    });
    return newArray;
  }
}

// Main function to test the FilmLibrary methods
function main() {
  // Creating some film entries
  const f1 = new Film(1, "Pulp Fiction", true, "2023-03-10", 5);
  const f2 = new Film(2, "21 Grams", true, "2023-03-17", 4);
  const f3 = new Film(3, "Star Wars", false);
  const f4 = new Film(4, "Matrix", false);
  const f5 = new Film(5, "Shrek", false, "2023-03-21", 3);

  // Adding the films to the FilmLibrary
  const library = new FilmLibrary();
  library.addNewFilm(f1);
  library.addNewFilm(f2);
  library.addNewFilm(f3);
  library.addNewFilm(f4);
  library.addNewFilm(f5);

  // Print Sorted films
  console.log("***** List of films (sorted) *****");
  const sortedFilms = library.sortByDate();
  sortedFilms.forEach((film) => console.log(film.toString()));

  // Deleting film #3
  library.deleteFilm(3);

  // Reset dates
  library.resetWatchedFilms();

  // Printing modified Library
  library.print();

  // Retrieve and print films with an assigned rating
  console.log("***** Films filtered, only the rated ones *****");
  const ratedFilms = library.getRated();
  ratedFilms.forEach((film) => console.log(film.toString()));

  // Additional instruction to enable debug 
  debugger;
}

main();
