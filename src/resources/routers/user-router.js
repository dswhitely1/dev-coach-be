const router = require('express').Router();

const userController = require('../controllers/user-controllers');
const checkAuth = require('../../middlewares/check-auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/:id', checkAuth, userController.delete);

module.exports = router;
