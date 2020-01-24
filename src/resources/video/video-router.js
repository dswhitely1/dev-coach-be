const router = require('express').Router();

const videoController = require('./video-controllers');

router.post('/auth', videoController.auth);
router.post('/login', videoController.auth);
router.post('/users', videoController.auth);

module.exports = router;