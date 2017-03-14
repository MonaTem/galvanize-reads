exports.up = function up(knex, Promise) {
  return knex.schema.createTable('book', (table) => {
    table.increments();
    table.string('title');
    table.string('genre');
    table.text('desc');
    table.string('image_url');
  });
};

exports.down = function down(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};
