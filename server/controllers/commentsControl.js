const db = require('../lib/knex-driver');

module.exports = {

  addComment: (req, res) => {
    const comment = {
      video_id: req.body.comment.video_id,
      message: req.body.comment.message,
      comment_timestamp: Math.round(Number(req.body.comment.timestamp)),
    };
    // console.log('COMMENT OBJECT >>>>>>>>>>>', comment);
    // console.log('REQ BODY ++++++++++++++++', req.body);
    db('users').select('user_id')
      .where({ user_name: req.body.comment.user_name })
      .then((data) => {
        if (!data.length) {
          res.send(400);
        }
        comment.user_id = data[0].user_id;

        db('comments')
          .returning(['comment_id', 'user_id', 'video_id', 'message', 'comment_timestamp'])
          .insert(comment)
          .then((results) => {
            results[0].user_name = req.body.comment.user_name;
            res.status(201).json(results[0]);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    // res.end();
  },


  getVideoComments: (req, res) => {
    const video_id = parseInt(req.params.videoId, 10);

    db('comments').select('message', 'video_id').where({ video_id })
      .join('users', 'users.user_id', '=', 'comments.user_id')
      .select('users.user_name', 'comments.comment_id', 'comments.message', 'comments.comment_timestamp')
      .then((comments) => {
        res.status(200).json(comments);
      });
  },
};
