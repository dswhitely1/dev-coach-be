const router = require('express').Router();

const userController = require('./user-controllers');
const checkAuth = require('../../utils/check-auth');
const userMiddleware = require('../users/user-helpers');

const {
  validateId,
  validateRegister,
  validateLogin,
} = userMiddleware;

router.post('/register', validateRegister, userController.register);
router.post('/login', validateLogin, userController.login);
router.delete('/:id', checkAuth, validateId, userController.delete);
router.get('/:id', userController.details); // add checkAuth

module.exports = router;
