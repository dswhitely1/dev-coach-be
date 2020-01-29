const API_KEY = process.env.EMAIL_KEY;
const DOMAIN = process.env.EMAIL_DOMAIN;
const mailgun = require('mailgun-js')({
  apiKey: API_KEY,
  domain: DOMAIN,
});
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

exports.cancelAppointment = async (req, res) => {
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
    res.status(500).json({
      message: 'Sorry, You can not cancel this appointment',
    });
  }
};

exports.addAppointment = async (req, res) => {
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
      .json({ message: "You can't make this appointment" });
  }
};

exports.sendAppointmentEmail = async (req, res) => {
  const { email, text, subject } = req.body;

  const mailOptions = {
    from: 'qualityhub@gmx.de',
    to: email,
    subject,
    text,
  };

  mailgun.messages().send(mailOptions, (error, data) => {
    if (error) {
      res
        .status(500)
        .json({ error, message: `sending email failed!` });
    } else {
      res.status(200).json({ data });
    }
  });
};
