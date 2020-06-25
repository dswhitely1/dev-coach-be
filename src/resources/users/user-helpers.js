const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');

exports.validateRegister = (req, res, next) => {
  try {

    const {
      first_name: firstName,
      last_name: lastName,
      password,
      email,
      username,                
    } = req.body;
    if (!(firstName && lastName && password && email && username)) {
      console.log("validate register", req.body)
      res.status(400).json({
        message: 'Please make sure required fields are filled in.',
      });
    } else {
      next();
    }

  }catch(error) {
    console.log(error.message)
  }
  
};

exports.validatePassword = async (req, res, next) => {
  if (req.body.username) {
    try {
      const user = await Users.findBy({username: req.body.username});
       console.log("validatePassword",user)
  
    if (
      !user ||
      (user && !bcrypt.compareSync(req.body.password, user.password))
    ) {
      res.status(400).json({
        message: 'Username or password is incorrect',
      });
    } else {
      next();
    }
  
    }catch(error) {
      console.log("validatePassword", error.message)
    }
       
  } else {
    try {
      const user = await Users.findBy({email: req.body.email});
       console.log("validatePassword",user)
  
    if (
      !user ||
      (user && !bcrypt.compareSync(req.body.password, user.password))
    ) {
      res.status(400).json({
        message: 'Email or password is incorrect',
      });
    } else {
      next();
    }
  
    }catch(error) {
      console.log("validatePassword", error.message)
    }
  }  
};

exports.validateEmail = async (req, res, next) => {
  console.log("validate email", req.body.email )
  const user = await Users.findBy({email:req.body.email});

  if (user) {
    res.status(409).json({
      message: 'Email already exists',
    });
  } else {
    next();
  }
};
exports.validateUsername = async (req, res, next) => {
    const user = await Users.findBy({username:req.body.username});
    if (user) {
    res.status(409).json({
      message: 'Username already exists',
    });
  } else {
    next();
  }
};

exports.validatePasswordUpdate = (req, res, next) => {
  const { password, confirm_password } = req.body;
  if (password === '' && confirm_password === '') {
    delete req.body.password;
    delete req.body.confirm_password;
    next();
  } else if (password || confirm_password) {
    if (password !== confirm_password) {
      res.status(400).json({
        message:
          'please make sure new password and confirm password match',
      });
    } else {
      req.body.password = bcrypt.hashSync(password, 10);
      delete req.body.confirm_password;
      next();
    }
  } else {
    next();
  }
};

exports.validateEmailUpdate = async (req, res, next) => {
const currentEmail = await Users.findBy({email:req.body.oldEmail})
  try {
    const { oldEmail, email } = req.body;
    if (oldEmail || email) {
       if (oldEmail === email) {
         res.status(400).json({
           message:
             'please make your new email is not the same as your current one!',
         });
       } else if(!currentEmail) {
        res.status(400).json({
          message:
            'Please make sure to use your current email here',
        });
       } else {
         next();
       }
     } 

  }catch(error) {
    console.log("validateEmailUpdateHelper", error.message)
  }
 
};



exports.validateLogin = (req, res, next) => {
  try {

    const { password, email, username} = req.body;
    console.log(req.body.username)
    if (!(password && email || password  && username)) {
      res.status(400).json({
        message: 'Please make sure required fields are filled in.',
      });
    } else {
      next();
    }

  }catch(error) {
    console.log("Validation Login", error.message)
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