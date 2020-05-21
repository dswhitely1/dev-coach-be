const jwt = require('jsonwebtoken');

module.exports = user => {
 
  const payload = {
    subject: user.id,
    email: user.email
  };
  console.log("coming from tokenize", payload)
  const options = {
    expiresIn: '1h',
  };

  const result = jwt.sign(
    payload,
    process.env.SECRET,
    options,
  );

  console.log(result)

  return result;
};
