
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments('comment_id').primary();
    table.string('message');
    table.integer('user_id').references('user_id').inTable('users');
  }).then( () => {
    console.log('comments table created');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};


//TODO: add column to reference 'video id'


