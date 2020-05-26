const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const {token} = req.cookies;
       if (!token) {
      res.status(401).json({message: "User Not logged in"})
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ you: err.message });
      }  else {
        req.decoded = decoded;
        next();
      }
      
    })

       
  } catch (error) {
    res.status(401).json({ message: 'Auth Failed' });
  }
};