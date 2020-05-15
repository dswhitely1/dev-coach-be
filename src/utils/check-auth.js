require('cookie-parser')
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.cookie
    if (token) {
      next();
    }
    else {
      res.status(401).json({ message: 'Auth Failed' });
    }

  } catch (error) {
    res.status(500).json({ message: "error with server" })
  }
};