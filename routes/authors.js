var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET authors home page. */
router.get('/', function(req, res, next) {
	knex('author').select()
		.then(function(authors) {
			res.render(
				'authors', {
					authors: authors
				}
			);
		});
});

/* GET 'new author' page. */
router.get('/new', function(req, res, next) {
	res.render('new-author');
});

/* INSERT new author. */
router.post('/new', function(req, res, next) {
	knex('author').insert(req.body)
		.then(function() {
			res.redirect('/authors');
		});
});

/* DELETE author. */
router.get('/delete/:id', function(req, res, next) {
	knex('author').del().where({
			id: req.params.id
		})
		.then(function() {
			res.redirect('/authors');
		});
});

/* GET 'edit author' page. */
router.get('/edit/:id', function(req, res, next) {
	knex('author').where({
			id: req.params.id
		})
		.then(function(author) {
			res.render("edit-author", {
				author: author[0]
			});
		});
});

/* EDIT author. */
router.put('/edit/:id', function(req, res, next) {
	knex('author').update(req.body).where({
			id: req.params.id
		})
		.then(function() {
			res.redirect('/authors');
		});
});

/* GET author. */
router.get('/:id', function(req, res, next) {
	console.log("bar");
	knex('author').where({
			id: req.params.id
		})
		.then(function(author) {
			res.render('view-author', {
				author: author[0]
			});
		});
});

module.exports = router;
