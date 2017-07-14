
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('comments', table => {
    table.decimal('comment_timestamp')
  }).then( console.log('time stamp column added') )
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('comments', table => {
    table.dropColumn('comment_timestamp')
  }).then( console.log('time stamp column dropped') )
};
