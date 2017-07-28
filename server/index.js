require('dotenv').config();

const express = require('express')
;

const router = express.Router();
const Path = require('path');

require('./config')(router);


if (process.env.NODE_ENV !== 'test') {
  //
  // We're in development or production mode;
  // create and run a real server.
  //
  const app = express();

  // Parse incoming request bodies as JSON
  app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(require('body-parser').json());
  // Mount our main router
  app.use('/', router);
  app.use(express.static(Path.join(__dirname, '../dist')));
  // Start the server!
  const port = process.env.PORT || 4000;
  app.listen(port);
} else {
  // We're in test mode; make this file importable instead.
  module.exports = router;
}
