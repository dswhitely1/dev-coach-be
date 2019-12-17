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
