
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('comments', table => {
    table.integer('video_id').references('video_id').inTable('videos');
  }).then( console.log('video_id column added'))
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', table => {
        table.dropColumn('video_id');
  }).then( console.log('video_id column removed'))
};


