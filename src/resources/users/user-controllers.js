require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const Users = require('./user-model');

const generateToken = require('../../utils/generate-token');
const tokenize = require('../../utils/tokenize');

exports.accountRecovery = async (req, res) => {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await Users.findBy(decoded.email);
    if (user) {
      res.status(200).json({
        user,
        message: 'password reset link is okay',
      });
    } else {
      res.status(401).json({
        message: 'invalid User',
      });
    }
  } catch (error) {
    res.status(401).json({
      error: {
        message: 'password reset link is invalid or has expired',
      },
    });
  }
};

exports.resetPasswordEmail = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findBy(email);
  try {
    if (!user) {
      res.status(400).json({
        message:
          'that email address is not recognized. Please try again',
      });
    } else {
      const token = tokenize(user);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NODEMAILER_ADDRESS,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      const mailOptions = {
        from: 'qualityhubemail@gmail.com',
        to: `${user.email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n' +
          `https://www.dev-coach.com/accountRecovery/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n',
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
            message: 'reset password email sent successfully',
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.getUsers = async (req, res) => {
  const users = await Users.getAllUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json('Users not found');
  }
};

exports.getUserByID = async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json('User not found');
  }
};

exports.register = async (req, res) => {
  try {
    const newUser = await Users.add({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email,
      location: req.body.location,
      role_id: req.body.role_id,
      experience_level: req.body.experience_level,
      hourly_rate: req.body.hourly_rate,
      linkedin: req.body.linkedin,
      github: req.body.github,
      description: req.body.description,
    });

    if (newUser) {
      try {
        const fullUserDetails = await Users.findByForLogin({
          email: newUser.email,
        });
        const token = generateToken(newUser.id);
        res.status(201).json({
          message: `Welcome ${newUser.first_name}`,
          token,
          user: {
            id: fullUserDetails.id,
            first_name: fullUserDetails.first_name,
            last_name: fullUserDetails.last_name,
            email: fullUserDetails.email,
            location: fullUserDetails.location,
            role_id: fullUserDetails.role_id,
            avatar_url: '',
            hourly_rate: fullUserDetails.hourly_rate,
            experience_level: fullUserDetails.experience_level,
            linkedin: fullUserDetails.linkedin,
            github: fullUserDetails.github,
            description: fullUserDetails.description,
          },
        });
      } catch (error) {
        res
          .status(500)
          .json(
            'Account registered, but error retrieving coach or student details',
          );
      }
    }
  } catch (error) {
    res.status(500).json({
      message: `Unable to register account ${error.message}`,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findByForLogin({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user.id);
      res.status(200).json({
        message: `Welcome Back ${user.first_name}!`,
        token,
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          location: user.location,
          role_id: user.role_id,
          avatar_url: user.avatar_url,
          hourly_rate: user.hourly_rate,
          linkedin: user.linkedin,
          github: user.github,
          description: user.description,
        },
      });
    } else {
      res
        .status(401)
        .json({ message: 'Email or password is incorrect' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Unable to login ${error.message}` });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await Users.remove(req.params.id);
    if (user) {
      res.status(200).json({
        message: 'User deleted',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not delete user' });
  }
};

exports.put = async (req, res) => {
  try {
    const updatedUser = await Users.update(req.params.id, req.body);
    if (updatedUser) {
      res.status(200).json({
        updatedUser,
        message: 'user updated successfully',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update user' });
  }
};

exports.putSettings = async (req, res) => {
  const email = req.body.oldEmail;
  const copyBody = req.body;
  await delete copyBody.oldEmail;
  try {
    const updatedUser = await Users.updateSettings(email, copyBody);
    if (updatedUser) {
      res.status(200).json({
        updatedUser,
        message: 'user updated successfully',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update user' });
  }
};
