const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

const db = new sqlite3.Database('./db/films.db');

// Retrieve the list of all available films
router.get('/', (req, res) => {
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
});

// Retrieve a film by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM films WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// Create a new film
router.post('/', (req, res) => {
  const { title, favorite, watchDate, rating } = req.body;
  const query = 'INSERT INTO films (title, favorite, watchDate, rating) VALUES (?, ?, ?, ?)';
  db.run(query, [title, favorite, watchDate, rating], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Mark an existing film as favorite/unfavorite
router.put('/:id/favorite', (req, res) => {
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
});

// Change the rating of a specific film
router.put('/:id/rating', (req, res) => {
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
});

// Delete an existing film
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM films WHERE id = ?';
  db.run(query, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes });
  });
});

// Update an existing film
router.put('/:id', (req, res) => {
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
});

module.exports = router;
