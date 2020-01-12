const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.live.com',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'liam_sutton115@hotmail.com', // generated ethereal user
      pass: 'Applecrumble7!', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail(
    {
      from: 'liam_sutton115@hotmail.com', // sender address
      to: 'devliam90@gmail.com', // list of receivers
      subject: 'Confirm Email', // Subject line
      text: 'Please confirm your email address', // plain text body
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Message sent');
        console.log(data);
      }
    },
  );

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main();
