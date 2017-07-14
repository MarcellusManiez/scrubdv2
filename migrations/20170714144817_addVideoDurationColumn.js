
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('videos', table => {
    table.integer('video_duration')
  }).then( console.log('video duration column added') )
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('videos', table => {
    table.dropColumn('video_duration')
  }).then( console.log('video duration column dropped') )
};
