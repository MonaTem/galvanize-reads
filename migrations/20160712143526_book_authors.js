exports.up = function up(knex, Promise) {
  return knex.schema.createTable('book_author', (table) => {
    table.increments();
    table.integer('book_id').references('book.id').onDelete('CASCADE');
    table.integer('author_id').references('author.id').onDelete('CASCADE');
  });
};

exports.down = function down(knex, Promise) {
  return knex.schema.dropTableIfExists('book_author');
};
