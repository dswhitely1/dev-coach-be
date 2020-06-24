const router = require('express').Router();

const appointmentsController = require('./appointments-controllers');
const checkAuth = require('../../utils/check-auth');
const corsfix = require("../../utils/cors");

router.get('/:id', checkAuth, corsfix, appointmentsController.appointments);
// appointment/:coach_or_student_id (send the role id in a Object = {role: 1})
router.post('/', checkAuth, corsfix, appointmentsController.addAppointment);
router.put('/:id', checkAuth, corsfix, appointmentsController.updateAppointment);
// appointment/appointment_id
router.post('/email', checkAuth, corsfix, appointmentsController.sendAppointmentEmail);

module.exports = router;