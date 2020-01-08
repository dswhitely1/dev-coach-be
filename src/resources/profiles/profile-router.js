const router = require('express').Router();

const userController = require('./profile-controllers');
// const checkAuth = require('../../utils/check-auth'); currently throwing an error

router.get('/coaches', userController.coaches);
router.get('/students', userController.students);
router.post('/coaches', userController.addCoach);
router.post('/students', userController.addStudent);

module.exports = router;
