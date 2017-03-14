exports.up = function up(knex, Promise) {
  return knex.schema.createTable('author', (table) => {
    table.increments();
    table.string('fname');
    table.string('lname');
    table.text('bio');
    table.string('image_url');
  });
};

exports.down = function down(knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};
