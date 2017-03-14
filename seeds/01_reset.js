exports.seed = function seed(knex, Promise) {
  return Promise.all([
    knex.raw('TRUNCATE book_author RESTART IDENTITY CASCADE'),
    knex.raw('TRUNCATE book RESTART IDENTITY CASCADE'),
    knex.raw('TRUNCATE author RESTART IDENTITY CASCADE'),
  ]);
};
