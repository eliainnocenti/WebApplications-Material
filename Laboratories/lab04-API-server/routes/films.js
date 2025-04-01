// Import required modules
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { body, param, query, validationResult } = require('express-validator'); // For input validation

// Create a router
const router = express.Router();

// Open the SQLite database
const db = new sqlite3.Database('./db/films.db');

// Middleware to handle validation errors
// Ensures that invalid inputs are caught and appropriate error responses are sent.
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to retrieve all films with optional filters
// Uses parameterized queries to prevent SQL injection.
router.get(
  '/',
  query('filter').optional().isIn(['all', 'favorite', 'best', 'lastmonth', 'unseen']),
  handleValidationErrors,
  (req, res) => {
    const filter = req.query.filter || 'all';
    let query = 'SELECT * FROM films';
    if (filter === 'favorite') query += ' WHERE favorite = 1';
    else if (filter === 'best') query += ' WHERE rating = 5';
    else if (filter === 'lastmonth') query += ' WHERE watchDate BETWEEN date("now", "-30 days") AND date("now")';
    else if (filter === 'unseen') query += ' WHERE watchDate IS NULL';

    db.all(query, [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  }
);

// Route to retrieve a film by ID
// Validates that the ID is a positive integer and prevents SQL injection.
router.get(
  '/:id',
  param('id').isInt({ min: 1 }),
  handleValidationErrors,
  (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM films WHERE id = ?', [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (!row) {
        res.status(404).json({ error: 'Film not found' });
        return;
      }
      res.json(row);
    });
  }
);

// Route to create a new film
// Validates input fields and uses parameterized queries for security.
router.post(
  '/',
  body('title').isString().notEmpty(),
  body('favorite').isInt({ min: 0, max: 1 }),
  body('watchDate').optional().isISO8601(),
  body('rating').optional().isInt({ min: 0, max: 5 }),
  handleValidationErrors,
  (req, res) => {
    const { title, favorite, watchDate, rating } = req.body;
    const query = 'INSERT INTO films (title, favorite, watchDate, rating) VALUES (?, ?, ?, ?)';
    db.run(query, [title, favorite, watchDate, rating], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
  }
);

// Route to mark a film as favorite/unfavorite
// Validates input fields and uses parameterized queries for security.
router.put(
  '/:id/favorite',
  param('id').isInt({ min: 1 }),
  body('favorite').isInt({ min: 0, max: 1 }),
  handleValidationErrors,
  (req, res) => {
    const id = req.params.id;
    const { favorite } = req.body;
    const query = 'UPDATE films SET favorite = ? WHERE id = ?';
    db.run(query, [favorite, id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    });
  }
);

// Route to change the rating of a film
// Validates input fields and uses parameterized queries for security.
router.put(
  '/:id/rating',
  param('id').isInt({ min: 1 }),
  body('delta').isInt(),
  handleValidationErrors,
  (req, res) => {
    const id = req.params.id;
    const { delta } = req.body;
    const query = 'UPDATE films SET rating = rating + ? WHERE id = ? AND rating IS NOT NULL';
    db.run(query, [delta, id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    });
  }
);

// Route to delete a film
// Validates that the ID is a positive integer and uses parameterized queries for security.
router.delete(
  '/:id',
  param('id').isInt({ min: 1 }),
  handleValidationErrors,
  (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM films WHERE id = ?';
    db.run(query, [id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    });
  }
);

// Route to update a film
// Validates input fields and uses parameterized queries for security.
router.put(
  '/:id',
  param('id').isInt({ min: 1 }),
  body('title').isString().notEmpty(),
  body('favorite').isInt({ min: 0, max: 1 }),
  body('watchDate').optional().isISO8601(),
  body('rating').optional().isInt({ min: 0, max: 5 }),
  handleValidationErrors,
  (req, res) => {
    const id = req.params.id;
    const { title, favorite, watchDate, rating } = req.body;
    const query = 'UPDATE films SET title = ?, favorite = ?, watchDate = ?, rating = ? WHERE id = ?';
    db.run(query, [title, favorite, watchDate, rating, id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    });
  }
);

// Route to search films by title
// Validates input fields and uses parameterized queries for security.
router.get(
  '/search',
  query('title').isString().notEmpty(),
  handleValidationErrors,
  (req, res) => {
    const title = `%${req.query.title}%`;
    const query = 'SELECT * FROM films WHERE title LIKE ?';
    db.all(query, [title], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  }
);

module.exports = router;
