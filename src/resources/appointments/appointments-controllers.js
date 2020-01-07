const Appointments = require('./appointments-model');

exports.appointments = async (req, res) => {
  try {
    const appointments = await Appointments.getAppointments(
      req.query.role,
      req.params.id,
    );

    if (appointments) {
      res.status(200).json({
        appointments,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Could not find any appointment' });
  }
};

exports.add_appointment = async (req, res) => {
  try {
    const appointment = await Appointments.add(req.body);
    if (appointment) {
      res.status(200).json({
        appointment,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'You dont can make this appointment' });
  }
};

exports.cancel_appointment = async (req, res) => {
  try {
    const appointment = await Appointments.cancel(
      'true',
      req.params.id,
    );
    if (appointment) {
      res.status(200).json({
        appointment,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'You dont can cancel this appointment' });
  }
};
