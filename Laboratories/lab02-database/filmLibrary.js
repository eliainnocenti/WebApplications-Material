const sqlite3 = require('sqlite3').verbose();

class FilmLibrary {
    constructor(dbFile) {
        this.db = new sqlite3.Database(dbFile, (err) => {
            if (err) console.error(err.message);
        });
    }

    // Get all films
    getAllFilms() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films';
            this.db.all(sql, [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // Get favorite films
    getFavoriteFilms() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE favorite = 1';
            this.db.all(sql, [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // Get films watched today
    getFilmsWatchedToday() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE watchDate = DATE("now")';
            this.db.all(sql, [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // Get films watched before a certain date
    getFilmsBeforeDate(date) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE watchDate < ?';
            this.db.all(sql, [date], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // Get films with rating >= given value
    getFilmsByRating(minRating) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE rating >= ?';
            this.db.all(sql, [minRating], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // Get films containing a given string in the title
    getFilmsByTitle(searchString) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE title LIKE ?';
            this.db.all(sql, [`%${searchString}%`], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    // Store a new film
    addFilm(title, favorite, watchDate, rating) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO films (title, favorite, watchDate, rating) VALUES (?, ?, ?, ?)';
            this.db.run(sql, [title, favorite, watchDate, rating], function (err) {
                if (err) reject(err);
                else resolve(`Film added with ID: ${this.lastID}`);
            });
        });
    }

    // Delete a film by ID
    deleteFilm(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM films WHERE id = ?';
            this.db.run(sql, [id], function (err) {
                if (err) reject(err);
                else resolve(`Deleted ${this.changes} film(s).`);
            });
        });
    }

    // Delete all watch dates
    resetWatchDates() {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE films SET watchDate = NULL';
            this.db.run(sql, [], function (err) {
                if (err) reject(err);
                else resolve(`Watch dates reset for ${this.changes} films.`);
            });
        });
    }

    // Close the database connection
    close() {
        this.db.close((err) => {
            if (err) console.error(err.message);
        });
    }
}

module.exports = FilmLibrary;
