const router = require('express').Router();

const chatController = require('./chat-controllers');

router.post('/', chatController.createUser);
router.post('/auth', chatController.auth);
router.post('/room', chatController.createRoom);
router.post('/user_room', chatController.getUserRooms);
router.post('/room_id', chatController.roomById);
module.exports = router;
