const router = require('express').Router();

const userController = require('./profile-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, userController.details);
// /profile/user_id (send object for role_id = {role: 2})
router.get('/coaches', checkAuth, userController.coaches);

module.exports = router;
