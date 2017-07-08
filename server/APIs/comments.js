

const CommentsAPI = require('express').Router();
const Comments = require('../controllers/commentsControl');


CommentsAPI.post('/api/addComment', Comments.addComment);


module.exports = CommentsAPI;