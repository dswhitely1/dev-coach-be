const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
  console.log("Right way",req.cookies) 
  console.log("take a look",req.headers.cookie)
  try {

    const token = req.cookies.token || req.headers.authorization;

    if (!token) {     
       res.status(401).json({message: `fail ${token}`})
    } else {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ you: `${err.message}` });
        console.log(err)
        console.log(decoded)
      }
    })
    next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Auth Failed' });
    console.log(error)
  }
};