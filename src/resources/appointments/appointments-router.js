const router = require('express').Router();

const appointmentsController = require('./appointments-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, appointmentsController.appointments);
// appointment/:coach_or_student_id (send the role id in a Object = {role: 1})
router.post('/', checkAuth, appointmentsController.addAppointment);
router.put(
  '/:id',
  checkAuth,
  appointmentsController.updateAppointment,
);
// appointment/appointment_id
router.post(
  '/email',
  checkAuth,
  appointmentsController.sendAppointmentEmail,
);
module.exports = router;
