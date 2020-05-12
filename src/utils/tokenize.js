const jwt = require('jsonwebtoken');

module.exports = user => {
  const payload = {
    subject: user.id,
    email: user.email,
    username:user.username
  };

  const options = {
    expiresIn: '1h',
  };

  const result = jwt.sign(
    payload,
    process.env.SECRET || 'open sesame',
    options,
  );

  return result;
};
