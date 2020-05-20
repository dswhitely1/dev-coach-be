const router = require('express').Router();

const userController = require('./profile-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/coaches', checkAuth, userController.coaches);
router.get('/students', checkAuth, userController.students);
router.post('/coaches', checkAuth, userController.addCoach);
router.post('/students', checkAuth, userController.addStudent);
router.put('/coachesSettings/:id', checkAuth, userController.updateCoach);

module.exports = router;
