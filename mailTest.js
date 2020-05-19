// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'dallasjames42@gmail.com',
  from: 'devcoachemail@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
};

sgMail.send(msg).then(() => {
    console.log("message sent")
}).catch((error) => {
    console.log(error.response.body)
})