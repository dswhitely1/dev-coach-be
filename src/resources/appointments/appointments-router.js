const router = require('express').Router();

const appointmentsController = require('./appointments-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', appointmentsController.appointments); // add checkauth

module.exports = router;