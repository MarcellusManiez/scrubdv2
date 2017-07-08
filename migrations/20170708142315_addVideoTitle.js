
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('videos', table => {
    table.string('video_title')
  }).then( console.log('video title column added') )
};

exports.down = function(knex, Promise) {
  table.dropColumn('video_title');
};
