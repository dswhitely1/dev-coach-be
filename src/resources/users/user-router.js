const router = require('express').Router();

const userController = require('./user-controllers');
const checkAuth = require('../../utils/check-auth');
const userMiddleware = require('../users/user-helpers');

const {
  validateId,
  validateRegister,
  validateLogin,
  validatePasswordUpdate,
} = userMiddleware;

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserByID);
router.post('/register', validateRegister, userController.register);
router.post('/login', validateLogin, userController.login);
router.delete('/:id', checkAuth, validateId, userController.delete);
router.put('/:id', validatePasswordUpdate, userController.put);

module.exports = router;
