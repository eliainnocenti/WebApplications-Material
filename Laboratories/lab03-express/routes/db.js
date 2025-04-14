'use strict';

/** DB access module **/

const sqlite = require('sqlite3');

// Open the database connection
const db = new sqlite.Database('./db/films.db', (err) => {
  if (err) throw err;
});

module.exports = db;
