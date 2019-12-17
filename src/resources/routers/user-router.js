const router = require('express').Router();

const userController = require('../controllers/user-controllers');
const checkAuth = require('../../middlewares/check-auth');
const userMiddleware = require('../../middlewares/validate-user');

const {
  validateId,
  validateRegister,
  validateLogin,
} = userMiddleware;

router.post('/register', validateRegister, userController.register);
router.post('/login', validateLogin, userController.login);
router.delete('/:id', checkAuth, validateId, userController.delete);

module.exports = router;
