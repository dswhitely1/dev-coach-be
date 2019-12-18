const Appointments = require('./appointments-model');

exports.appointments = async (req, res) => {
  try {
    const appointments = await Appointments.get_appointments(req.body.role, req.params.id);
    if (appointments) {
      res.status(200).json({
        appointments,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not find user' });
  }
};