require('dotenv')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
    console.log(error)
    res
      .status(500)
      .json({ message: "You can't make this appointment" });
  }
};

exports.sendAppointmentEmail = async (req, res) => {
  const { email, text, subject } = req.body;

  const msg = {
    to: email,
    from: 'dallasjames42@gmail.com',
    subject,
    text
  }

  sgMail.send(msg).then(() => {
    console.log("message sent")
    res.status(200).json({
      message: "Email sent"
    }).catch((err) => {
      console.log(err)
    })
})
}