

const VideoAPI = require('express').Router();
const videos = require('../controllers/videoControl');

VideoAPI.get('/api/getVideo/:videoId', videos.getVideoById);

VideoAPI.post('/api/addVideo', videos.addVideo);


module.exports = VideoAPI;