require('dotenv');
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

router.get('/accountRecovery', userController.accountRecovery);
router.get('/', checkAuth, userController.getUsers);
router.get('/:id', checkAuth, userController.getUserByID);
router.post('/register', validateRegister, userController.register);
router.post('/login', validateLogin, userController.login);
router.delete('/:id', checkAuth, validateId, userController.delete);
router.put(
  '/settings',
  validatePasswordUpdate,
  userController.putSettings,
);
router.put('/:id', validatePasswordUpdate, userController.put);
router.post('/resetPassword', userController.resetPasswordEmail);

module.exports = router;
