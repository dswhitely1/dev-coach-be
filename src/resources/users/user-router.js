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
  validateEmail,
  validatePassword,
  validateUsername,
} = userMiddleware;

router.post('/resetPassword', userController.resetPasswordEmail);
router.get('/accountRecovery', userController.accountRecovery);
router.get('/', checkAuth, userController.getUsers);
router.get('/:id', checkAuth, userController.getUserByID);
router.post(
  '/register',
  [validateRegister, validateEmail, validateUsername ],
  userController.register,
);
router.post(
  '/login',
  [validateLogin, validatePassword],
  userController.login,
);
router.delete('/:id', checkAuth, validateId, userController.delete);
router.put(
  '/settings',
  validatePasswordUpdate,
  userController.putSettings,
);
router.put('/:id', validatePasswordUpdate, userController.put);

module.exports = router;