var db = require('../lib/knex-driver');

module.exports = {

  addComment: (req, res) => {
    
    const comment = {
      video_id: req.body.video_id,
      message: req.body.message,
      comment_timestamp:  Math.round(Number(req.body.timestamp))
    }

    db('users').select('user_id')
      .where( { user_name : req.body.user_name })
      .then( data => {
        if (!data.length) {
          res.send(400)
        }
        comment.user_id = data[0].user_id
        
        db('comments')
          .returning([ 'comment_id','user_id', 'video_id', 'message', 'comment_timestamp'])
          .insert(comment)
          .then( results => 
            res.status(201).json(results[0])
          )
          .catch( err => {
            console.error(err);
          })
      })
  },



  getVideoComments: (req, res) => {
  
    const video_id = parseInt(req.params.videoId);
    
    db('comments').select('message', 'video_id').where( { video_id } )
      .join('users', 'users.user_id', '=', 'comments.user_id')
      .select('users.user_name', 'comments.comment_id', 'comments.message', 'comments.comment_timestamp')
      .then( comments => {
        res.status(200).json(comments)
      })
  }
};