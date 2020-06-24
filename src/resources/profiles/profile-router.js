const router = require('express').Router();

const userController = require('./profile-controllers');
const checkAuth = require('../../utils/check-auth');
const corsfix = require("../../utils/cors");

router.get('/coaches', checkAuth, corsfix, userController.coaches);
router.get('/students', checkAuth, corsfix, userController.students);
router.post('/coaches', checkAuth, corsfix, userController.addCoach);
router.post('/students', checkAuth, corsfix, userController.addStudent);
router.put('/coachesSettings/:id', checkAuth, corsfix, userController.updateCoach);

module.exports = router;
