

const VideoAPI = require('express').Router();
const videos = require('../controllers/videoControl');

VideoAPI.get('/api/getVideo/:videoId', videos.getVideoById);

VideoAPI.get('/api/getVideosByUser/:userId', videos.getVideosByUserId);

VideoAPI.get('/api/getAllVideos/:userId', videos.getAllVideos);

VideoAPI.post('/api/addVideo', videos.addVideo);


module.exports = VideoAPI;
