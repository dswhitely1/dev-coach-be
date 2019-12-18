const jwt = require('jsonwebtoken');

module.exports = user => {
  const payload = {
    subject: user.id,
  };

  const options = {
    expiresIn: '1d',
  };

<<<<<<< HEAD
  const result = jwt.sign(payload, process.env.SECRET || "Hello", options);
=======
  const result = jwt.sign(
    payload,
    process.env.SECRET || 'Hello',
    options,
  );
>>>>>>> 6cca2ade58659c4181d53d0abd9df83b7f44b5fe

  return result;
};
