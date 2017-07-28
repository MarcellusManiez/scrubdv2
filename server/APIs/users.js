

const UserAPI = require('express').Router();
const users = require('../controllers/userControl');


UserAPI.post('/api/signup', users.signup);

UserAPI.post('/api/login', users.login);


module.exports = UserAPI;
