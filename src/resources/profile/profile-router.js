const router = require('express').Router();

const userController = require('./profile-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, userController.details);
router.get('/coaches', checkAuth, userController.coaches);

module.exports = router;
