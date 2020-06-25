require('dotenv');
const router = require('express').Router();

const userController = require('./user-controllers');
const checkAuth = require('../../utils/check-auth');
const userMiddleware = require('../users/user-helpers');
const corsfix = require("../../utils/cors");



const {
  validateId,
  validateRegister,
  validateLogin,
  validatePasswordUpdate,
  validateEmail,
  validatePassword,
  validateUsername,
  validateEmailUpdate
} = userMiddleware;

router.post('/resetPassword', userController.resetPasswordEmail);
router.get('/accountRecovery', userController.accountRecovery);
router.get('/', checkAuth, userController.getUsers);
router.get('/:id', checkAuth, userController.getUserByID);
router.post('/register', [validateRegister, validateEmail, validateUsername ], corsfix, userController.register);
router.post('/login', [validateLogin, validatePassword, corsfix], userController.login);
router.delete('/:id', checkAuth, validateId,corsfix, userController.delete);
router.put(
  '/settings',[checkAuth, validateEmailUpdate], corsfix,
  userController.putSettings,
);
router.put('/:id',[checkAuth, validatePasswordUpdate], corsfix, userController.put);

module.exports = router;