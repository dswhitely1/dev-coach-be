const Users = require('../users/user-model');
const bcrypt = require('bcryptjs');

exports.validateRegister = (req, res, next) => {
  const {
    first_name: firstName,
    last_name: lastName,
    password,
    email,
  } = req.body;

  if (!(firstName && lastName && password && email)) {
    res.status(400).json({
      message: 'Please make sure required fields are filled in.',
    });
  } else {
    next();
  }
};

exports.validatePasswordUpdate = (req, res, next) => {
  const { password, confirm_password } = req.body;

  if (password || confirm_password) {
    if (password !== confirm_password) {
      res.status(400).json({
        message:
          'please make sure new password and confirm password match',
      });
    } else {
      req.body.password = bcrypt.hashSync(password, 10);
      delete req.body.confirm_password;
      next();
    }
  } else {
    next();
  }
};

exports.validateLogin = (req, res, next) => {
  const { password, email } = req.body;

  if (!(password && email)) {
    res.status(400).json({
      message: 'Please make sure required fields are filled in.',
    });
  } else {
    next();
  }
};

exports.validateId = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      res.status(400).json({ message: 'Unable to find user' });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: `Your request could not be processed ${error.message}`,
    });
  }
};
