
const jwt = require('jsonwebtoken');
require("cookie-parser")


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
       if (!token) {
      return res.status(401).json({message: `User Not logged in, ${token}`})
      
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ you: `${err.message}, ${token}` });
        console.log(err)
      }  else {
        console.log(decoded)
        next();
      }
    })

    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth Failed' });
    console.log(error)
  }
};