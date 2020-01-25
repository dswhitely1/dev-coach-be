const router = require('express').Router();

const videoController = require('./video-controllers');

router.post('/auth', videoController.auth);
router.post('/login', videoController.login);
router.post('/users', videoController.users);

module.exports = router;