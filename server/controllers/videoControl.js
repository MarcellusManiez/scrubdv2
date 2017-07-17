var db = require('../lib/knex-driver');

module.exports = {

  addVideo: (req, res) => {
    const videoData = { user_name, video_url, video_title, thumbnail_url, video_duration } = req.body.data;
    //TODO: Make these fields required ^^^ for submission
    //TODO: Don't allow dupliate videos from the user
      //USE ASYNC AWAIT!!

    db('users').select('user_id')
      .where( { user_name: videoData.user_name } )
      .then( data => {
        videoData.user_id = data[0].user_id
      
        db('videos')
          .returning(['video_id', 'user_id', 'video_title', 'video_url', 'thumbnail_url'])
          .insert( { 
            user_id: videoData.user_id, 
            video_url: videoData.video_url,
            video_title: videoData.video_title,
            thumbnail_url: videoData.thumbnail_url,
            video_duration: videoData.video_duration
          })
          .then( data => {
            res.json(data)
          })  
          .catch( err => console.error(err) )
      })
  },

  getVideoById: (req, res) => {
    const video_id = parseInt(req.params.videoId);
    
    db('videos').select()
      .where( { video_id } )
      .then( video => {
        if ( !video.length ) {
          res.sendStatus(400)
        }
        
        res.json(video[0])
      })  
    }

};

        
