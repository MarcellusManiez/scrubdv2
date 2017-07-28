var db = require('../lib/knex-driver');

module.exports = {

  signup: (req, res) => {
    const user = { user_name, user_email, password } = req.body;
    db('users').select('*').where({user_name : user.user_name})
      .then( exists => {
        if (exists.length) {
          res.json('username already exists')
        } else {
          db('users')
          .returning( ['user_id', 'user_name', 'user_email'] )
          .insert(user)
          .then( userData => {
            res.json(userData)
          })
        }
      })
  },


  login: (req, res) => {
    const user = { user_name, user_email, password } = req.body;

    db('users').select('*')
      .where('user_name', '=', user.user_name)
      .andWhere('password', '=', user.password)
      .then( results=> {
        if (results.length) {
          res.json(results[0])
        } else {
          res.json('incorrent username or password')
        }
      })

  },

  logout: (req, res) => {
    //TODO: add legit logout functionality
  },

};
