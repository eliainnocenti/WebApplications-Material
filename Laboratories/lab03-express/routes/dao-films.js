'use strict';

/* Data Access Object (DAO) module for accessing films data */

const db = require('./db');
const dayjs = require("dayjs");

// Filters for retrieving films
const filterValues = {
  'favorite':  { filterFunction: film => film.favorite },
  'best':      { filterFunction: film => film.rating >= 5 },
  'lastmonth': { filterFunction: film => isSeenLastMonth(film) },
  'unseen':    { filterFunction: film => film.watchDate ? false : true },
  'all':       { filterFunction: film => true },
};

// Helper function to check if a film was seen last month
const isSeenLastMonth = (film) => {
  if('watchDate' in film && film.watchDate) {  // Accessing watchDate only if defined
    const diff = dayjs(film.watchDate).diff(dayjs(),'month')   // watchDate is kept as a string (or null value) in the film object
    const isLastMonth = diff <= 0 && diff > -1 ;      // last month
    return isLastMonth;
  }
}

// Convert a database record to a film object
const convertFilmFromDbRecord = (dbRecord) => {
  const film = {};
  film.id = dbRecord.id;
  film.title = dbRecord.title;
  film.favorite = dbRecord.favorite;
  // Note that the column name is all lowercase, JSON object requires camelCase as per the API specifications we defined.
  // We convert "watchdate" to the camelCase version ("watchDate").

  // FIXME
  // Also, here you decide how to transmit an empty date in JSON. We decided to use the empty string.
  // Using the null value is an alternative, but the API documentation must be updated and the client must be modified accordingly.
  //film.watchDate = dbRecord.watchdate ? dayjs(dbRecord.watchdate) : "";
  film.watchDate = dbRecord.watchdate;
  film.rating = dbRecord.rating;
  
  /* // ALTERNATIVE:
  // WARNING: the column names in the database are all lowercases. JSON object requires camelCase as per the API specifications we defined.
  // We convert "watchdate" to the camelCase version ("watchDate").
  // Object.assign will copy all fields returned by the DB (i.e., all columns if SQL SELECT did not specify otherwise)
  const film = Object.assign({}, e, { watchDate: e.watchdate? dayjs(e.watchdate) : "" });  // adding camelcase "watchDate"
  delete film.watchdate;  // removing lowercase "watchdate"
  */
  return film;
}

/** NOTE
 * return error messages as json object { error: <string> }
 */

// Retrieve the whole list of films
exports.listFilms = (filter) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM films';
      db.all(sql, (err, rows) => {
        if (err) { reject(err); }

        const films = rows.map((e) => {
          const film = convertFilmFromDbRecord(e);
          delete film.watchdate;  // removing lowercase "watchdate"
          return film;
        });

        // Check if a filter is specified, otherwise just return the complete list.
        if (filter) {
          // WARNING: if implemented as if(filterValues[filter]) returns true also for filter = 'constructor' but then .filterFunction does not exists
          if (filterValues.hasOwnProperty(filter)) 
            resolve(films.filter(filterValues[filter].filterFunction));
            return;  // Do not forget return here!
        }
        resolve(films);
      });
    });
};
  
// Retrieve a film by its ID
exports.getFilm = (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM films WHERE id=?';
      db.get(sql, [id], (err, row) => {
        if (err) {
          reject(err);
        }
        if (row == undefined) {
          resolve({ error: 'Film not found.' });
        } else {
          const film = convertFilmFromDbRecord(row);
          resolve(film);
        }
      });
    });
};
  
// Add a new film to the database
exports.createFilm = (film) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO films (title, favorite, watchDate, rating) VALUES(?, ?, ?, ?)';
      db.run(sql, [film.title, film.favorite, film.watchDate, film.rating], function (err) {
        if (err) {
          reject(err);
        }
        // Returning the newly created object with the DB additional properties (i.e., unique id) to the client.
        resolve(exports.getFilm(this.lastID));
      });
    });
};
  
// Update an existing film
exports.updateFilm = (id, film) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE films SET title = ?, favorite = ?, watchDate = ?, rating = ? WHERE id = ?';
      db.run(sql, [film.title, film.favorite, film.watchDate, film.rating, id], function (err) {
        if (err) {
          reject(err);
        }
        if (this.changes !== 1) {
          resolve({ error: 'Film not found.' });
        } else {
          resolve(exports.getFilm(id)); 
        }
      });
    });
};

// Update the rating of a film
exports.updateFilmRating = (id, deltaRating) => {
  console.log(`id: ${id} deltaRating: ${deltaRating}`);
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE films SET rating=rating+? WHERE id = ?';
    db.run(sql, [deltaRating, id], function (err) {
      if (err) {
        reject(err);
      }
      if (this.changes !== 1) {
        resolve({ error: 'Film not found.' });
      } else {
        resolve(exports.getFilm(id)); 
      }
    });
  });
};

// Delete a film by its ID
exports.deleteFilm = (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM films WHERE id = ?';
      db.run(sql, [id], (err) => {
        if (err) {
          reject(err);
        } else
          resolve(null);
      });
    });
}
