const express = require('express');

const router = express.Router();
const knex = require('../db/knex');

/* GET authors home page. */
router.get('/', (req, res) => {
  knex('author').select().then((authors) => {
    res.render('authors', {
      authors,
    });
  });
});

/* GET 'new author' page. */
router.get('/new', (req, res) => {
  res.render('new-author');
});

/* INSERT new author. */
router.post('/new', (req, res) => {
  knex('author').insert(req.body).then(() => {
    res.redirect('/authors');
  });
});

/* DELETE author. */
router.get('/delete/:id', (req, res) => {
  knex('author')
    .del()
    .where({
      id: req.params.id,
    })
    .then(() => {
      res.redirect('/authors');
    });
});

/* GET 'edit author' page. */
router.get('/edit/:id', (req, res) => {
  knex('author')
    .where({
      id: req.params.id,
    })
    .then((author) => {
      res.render('edit-author', {
        author: author[0],
      });
    });
});

/* EDIT author. */
router.put('/edit/:id', (req, res) => {
  knex('author')
    .update(req.body)
    .where({
      id: req.params.id,
    })
    .then(() => {
      res.redirect('/authors');
    });
});

/* GET author. */
router.get('/:id', (req, res) => {
  knex('author')
    .where({
      id: req.params.id,
    })
    .then((author) => {
      res.render('view-author', {
        author: author[0],
      });
    });
});

module.exports = router;
