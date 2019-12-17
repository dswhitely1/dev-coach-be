const router = require('express').Router();

const userController = require('../controllers/user-controllers');
const checkAuth = require('../../middlewares/check-auth');
const userMiddleware = require('../../middlewares/validate-user');

router.post(
  '/register',
  userMiddleware.validateRegister,
  userController.register,
);

router.post(
  '/login',
  userMiddleware.validateLogin,
  userController.login,
);

router.delete('/:id', checkAuth, userController.delete);

module.exports = router;
