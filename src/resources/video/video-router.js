const router = require('express').Router();

const videoController = require('./video-controllers');
// const checkAuth = require('../../utils/check-auth');

router.post('/', videoController.video);

module.exports = router;