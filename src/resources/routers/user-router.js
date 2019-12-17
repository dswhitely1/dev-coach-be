const router = require('express').Router();

const userController = require('../controllers/user-controllers');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/:id', userController.delete);

module.exports = router;
