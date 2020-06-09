const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
  console.log("Right way",req.cookies.token) 
   console.log("take a look",req.headers.cookie)
  try {
    const { token } = req.cookies;
       if (!token) {
      return res.status(401).json({message: `User Not logged in, ${token}`})
      
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ you: `${err.message}, ${token}` });
        console.log(err)
      }  else {
        console.log(decoded)
       
      }
    })
    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth Failed' });
    console.log(error)
  }
};