var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET authors home page. */
router.get('/', function (req, res, next) {
  knex('author').select()
    .then(function (authors) {
      res.render(
        'authors', {
          authors: authors
        }
      );
    });
});

/* GET 'new author' page. */
router.get('/new', function (req, res, next) {
  res.render('new-author');
});

/* INSERT new author. */
router.post('/new', function (req, res, next) {
  knex('author').insert(req.body)
    .then(function () {
      res.redirect('/authors');
    });
});

/* DELETE author. */
router.get('/delete/:id', function (req, res, next) {
  knex('author').del().where({
      id: req.params.id
    })
    .then(function () {
      res.redirect('/authors');
    });
});

/* GET 'edit author' page. */
router.get('/edit/:id', function (req, res, next) {
  knex('author').where({
      id: req.params.id
    })
    .then(function (author) {
      res.render("edit-author", {
        author: author[0]
      });
    });
});

/* EDIT author. */
router.put('/edit/:id', function (req, res, next) {
      knex('author').update(req.body).wheHi Tuan!I 've been meaning to shoot you an email and now I finally am. As you maybe have seen or heard, I'
      ve been back in the DC area
      for almost three weeks and am job hunting, interview, and actually got my first offer yesterday, but not sure
      if I 'm going to take it (low salary, not working with tech I have experience with or am sure I want to get experience with, but maybe). Anyway, right now I'
      m staying at my parents ' place on the Eastern Shore of Maryland. I drive back and forth into DC for interviews. If I have things days in a row, sometimes I am looking to stay over. That is one of the things I wanted to put out a feeler to you about. I know you don'
      t have a big place, so I hesitate to ask, at least not unless I 'm bringing my girls, Susanne and Sarah, to visit for a day or two like last time, which was awesome (thank you, again)!. ALSO, as you know, I'
      m looking
      for jobs, especially those related to developing software applications, especially applications where I 'd be working with web-related technologies, especially JavaScript. I realize that'
      s pretty specific, but that 's the goal. That said, I for sure am flexible. I'
      m just trying to get my first
      break in the industry, first foot in the door, ideally on a great team at a great place with great opportunities(again, that 's the wish, but I have flexability). Please let me know if/when you have any ideas. I have a private-sector resume and a federal one. I'
        m interviewing with a government contractor on Monday and the IRS on Friday.re({
          id: req.params.id
        })
        .then(function () {
          res.redirect('/authors');
        });
      });

    /* GET author. */
    router.get('/:id', function (req, res, next) {
      console.log("bar");
      knex('author').where({
          id: req.params.id
        })
        .then(function (author) {
          res.render('view-author', {
            author: author[0]
          });
        });
    });

    module.exports = router;
