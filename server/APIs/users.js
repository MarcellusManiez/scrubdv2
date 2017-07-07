

const UserAPI = require('express').Router();
const users = require('../controllers/userControl');


UserAPI.post('/api/signup', users.signup);


module.exports = UserAPI;