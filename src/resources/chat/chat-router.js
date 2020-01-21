const router = require('express').Router();

const chatController = require('./chat-controllers');
const checkAuth = require('../../utils/check-auth');

router.post('/', checkAuth, chatController.createUser);
router.post('/auth', checkAuth, chatController.auth);
router.post('/room', checkAuth, chatController.createRoom);
router.post('/user_room', checkAuth, chatController.getUserRooms);
module.exports = router;
