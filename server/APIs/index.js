

const router = require('express').Router();

router.use('/', require('./videos.js'));

router.use('/', require('./users.js'));

module.exports = router;
