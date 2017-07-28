

const CommentsAPI = require('express').Router();
const Comments = require('../controllers/commentsControl');


CommentsAPI.post('/api/addComment', Comments.addComment);

CommentsAPI.get('/api/getVideoComments/:videoId', Comments.getVideoComments);


module.exports = CommentsAPI;
