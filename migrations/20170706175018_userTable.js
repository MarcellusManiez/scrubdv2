
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('user_id').primary();
    table.string('user_name');
    table.string('user_email');
    table.string('password');
  }).then( () => {
    console.log('users table created');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};


