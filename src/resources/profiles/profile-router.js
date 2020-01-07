const router = require('express').Router();

const userController = require('./profile-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/coaches', checkAuth, userController.coaches);
// TODO: add checkAuth middleware since this route should be protected
router.post('/coaches', userController.addCoach);
router.post('/students', userController.addStudent);

module.exports = router;
