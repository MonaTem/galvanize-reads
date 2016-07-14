var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
	knex('book').select()
		.then(function(books) {
			res.render(
				'books', {
					books: books
				}
			);
		});
});

/* GET 'new book' page. */
router.get('/new', function(req, res, next) {
	res.render('new-book');
});

/* INSERT new book. */
router.post('/new', function(req, res, next) {
	knex('book').insert(req.body)
		.then(function() {
			res.redirect('/books');
		});
});

/* DELETE book. */
router.get('/delete/:id', function(req, res, next) {
	knex('book').del().where({
			id: req.params.id
		})
		.then(function() {
			res.redirect('/books');
		});
});

/* GET 'edit book' page. */
router.get('/edit/:id', function(req, res, next) {
	knex('book').where({
			id: req.params.id
		})
		.then(function(book) {
			res.render("edit-book", {
				book: book[0]
			});
		});
});

/* EDIT book. */
router.put('/edit/:id', function(req, res, next) {
	knex('book').update(req.body).where({
			id: req.params.id
		})
		.then(function() {
			res.redirect('/books');
		});
});

/* GET book. */
router.get('/:id', function(req, res, next) {
	console.log("bar");
	knex('book').where({
			id: req.params.id
		})
		.then(function(book) {
			res.render('view-book', {
				book: book[0]
			});
		});
});

module.exports = router;
