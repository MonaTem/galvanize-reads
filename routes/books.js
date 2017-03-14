const express = require('express');

const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('book').select().then((books) => {
    res.render('books', {
      books,
    });
  });
});

/* GET 'new book' page. */
router.get('/new', (req, res) => {
  res.render('new-book');
});

/* INSERT new book. */
router.post('/new', (req, res) => {
  knex('book').insert(req.body).then(() => {
    res.redirect('/books');
  });
});

/* DELETE book. */
router.get('/delete/:id', (req, res) => {
  knex('book')
    .del()
    .where({
      id: req.params.id,
    })
    .then(() => {
      res.redirect('/books');
    });
});

/* GET 'edit book' page. */
router.get('/edit/:id', (req, res) => {
  knex('book')
    .where({
      id: req.params.id,
    })
    .then((book) => {
      res.render('edit-book', {
        book: book[0],
      });
    });
});

/* EDIT book. */
router.put('/edit/:id', (req, res) => {
  knex('book')
    .update(req.body)
    .where({
      id: req.params.id,
    })
    .then(() => {
      res.redirect('/books');
    });
});

/* GET book. */
router.get('/:id', (req, res) => {
  knex('book')
    .where({
      id: req.params.id,
    })
    .then((book) => {
      res.render('view-book', {
        book: book[0],
      });
    });
});

module.exports = router;
