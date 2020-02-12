const router = require('express').Router();

const appointmentsController = require('./appointments-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, appointmentsController.appointments);
router.post('/', checkAuth, appointmentsController.addAppointment);
router.put('/:id', checkAuth, appointmentsController.updateAppointment);
router.post(
  '/email',
  checkAuth,
  appointmentsController.sendAppointmentEmail,
);
module.exports = router;
