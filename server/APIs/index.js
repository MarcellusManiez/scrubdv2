

const router = require('express').Router();

router.use('/', require('./videos.js'));

router.use('/', require('./users.js'));

router.use('/', require('./comments.js'));

module.exports = router;
