exports.up = function(knex, Promise) {
	return knex.schema.createTable('author', function(table) {
		table.increments();
		table.string('fname');
		table.string('lname');
		table.text('bio');
		table.string('image_url');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('author');
};
