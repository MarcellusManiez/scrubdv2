var db = require('../lib/knex-driver');

module.exports = {

  signup: (req, res) => {
    const stuff = { user_name, user_email, password } = req.body;
    
    res.json(stuff)
  },


  login: (req, res) => {},

  logout: (req, res) => {},

};