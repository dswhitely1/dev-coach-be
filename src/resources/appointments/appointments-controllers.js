const nodemailer = require('nodemailer');

const Appointments = require('./appointments-model');

exports.appointments = async (req, res) => {
  try {
    const appointments = await Appointments.getAppointments(
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

exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointments.update(
      req.body,
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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_ADDRESS,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'qualityhubemail@gmail.com',
    to: email,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.status(500).json({
        error,
        message: `sending email failed!`,
      });
    } else {
      res.status(200).json({
        response,
        message: 'email sent successfully',
      });
    }
  });
};
