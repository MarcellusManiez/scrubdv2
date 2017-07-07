var db = require('../lib/knex-driver');

module.exports = {

  addVideo: (req, res) => {
    console.log(req.body);
    res.json('got it')
  }
};