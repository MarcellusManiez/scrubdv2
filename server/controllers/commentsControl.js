var db = require('../lib/knex-driver');

module.exports = {

  addComment: (req, res) => {
    const comment = {
      video_id: req.body.video_id,
      message: req.body.message,
    }
    //GET TIMESTAMP
    //Make FIELDS MANDATORY!!
    db('users').select('user_id')
      .where( { user_name : req.body.user_name })
      .then( data => {
        comment.user_id = data[0].user_id
        
        db('comments')
          .returning([ 'comment_id', 'user_id', 'video_id', 'message'])
          .insert(comment)
          .then( results => 
            res.json(results)
          )
          .catch( err => {
            console.error(err);
            res.sendStatus(400)
          })
      })
  }
};
