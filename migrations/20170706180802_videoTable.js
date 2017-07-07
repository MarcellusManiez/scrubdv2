
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('videos', (table) => {
    table.increments('video_id').primary();
    table.string('video_url');
    table.integer('user_id').references('user_id').inTable('users');
  }).then( () => {
    console.log('videos table created');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('videos');
};

