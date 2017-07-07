

const VideoAPI = require('express').Router();
const videos = require('../controllers/videoControl');


VideoAPI.post('/api/addVideo', videos.addVideo);


module.exports = VideoAPI;