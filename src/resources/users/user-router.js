const router = require('express').Router();

const userController = require('./user-controllers');
const checkAuth = require('../../utils/check-auth');
const userMiddleware = require('../users/user-helpers');

const {
  validateId,
  validateRegister,
  validateLogin,
} = userMiddleware;

router.get('/', checkAuth, userController.getUsers);
router.get('/:id', checkAuth, userController.getUserByID);
router.post('/register', checkAuth, validateRegister, userController.register);
router.post('/login', checkAuth, validateLogin, userController.login);
router.delete('/:id', checkAuth, validateId, userController.delete);
router.put('/:id', checkAuth, userController.put);

module.exports = router;
