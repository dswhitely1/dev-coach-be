const router = require('express').Router();

const chatController = require('./chat-controllers');
const checkAuth = require('../../utils/check-auth');

router.post('/', chatController.createUser);
router.post('/auth', chatController.auth);
module.exports = router;