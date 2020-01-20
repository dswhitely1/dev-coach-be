const router = require('express').Router();

const chatController = require('./chat-controllers');

router.post('/', chatController.createUser);
router.post('/auth', chatController.auth);
router.post('/room', chatController.createRoom);
module.exports = router;
