
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('videos', table => {
    table.string('thumbnail_url')
  }).then( console.log('thumbnail URL column added'))
};

exports.down = function(knex, Promise) {
  return knex.schema.table('videos', table => {
    table.dropColumn('thumbnail_url')
  }).then( console.log('thumbnail ULR column dropped'))
};
