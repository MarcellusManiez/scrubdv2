
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('comments', table => {
    table.decimal('comment_timestamp', undefined, 2)
  }).then( console.log('timestamp column added') )
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', table => {
      table.dropColumn('comment_timestamp');
  });
};
