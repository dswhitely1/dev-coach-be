const Users = require('../users/user-model');

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
