require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail')


const Users = require('./user-model');

const generateToken = require('../../utils/generate-token');
const tokenize = require('../../utils/tokenize');

exports.accountRecovery = async (req, res) => {
 
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await Users.findBy(decoded.email);
    console.log(user)
    
     if (user) {
      res.status(200).json({
        user,
        message: 'password reset link is okay',
      });
    } else {
      res.status(401).json({
        message: 'invalid User',
      });
    }
  } catch (error) {
    res.status(401).json({
      error: {
        message: 'password reset link is invalid or has expired',
      },
    });
  }
};


exports.resetPasswordEmail = async (req, res) => {
 
  const { email } = req.body;
  const user = await Users.findBy({email});
 
  try {
    if (!user) {
      res.status(400).json({
        message:
          'that email address is not recognized. Please try again',
      });
    } else {
      const token = tokenize(user);
      const msg = {
       
        to: `${user.email}`,
        from: 'dallasjames42@gmail.com',
        subject: 'Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n' +
          `https://www.dev-coach.com/accountRecovery/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n',
      };
      
      sgMail.send(msg).then(() => {
        console.log("message sent successfully")
        res.status(200).json({
          message: "Email sent Successfully"
        }).catch((err) => {
          console.log(err)
        })
    }).catch((error) => {
        console.log(error.response.body)
    })
  }
  } catch (error) {
    res.status(500).json({
      error,
    });
    
  }
};

exports.getUsers = async (req, res) => {
  const users = await Users.getAllUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json('Users not found');
  }
};

exports.getUserByID = async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json('User not found');
  }
};

exports.register = async (req, res) => {
  try {
    const newUser = await Users.add({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email,
      tags: req.body.tags,
      location: req.body.location,
      username:req.body.username
    });

    if (newUser) {
      try {
        const fullUserDetails = await Users.findByForLogin({
          email: newUser.email,
        })
        const token = generateToken(newUser.id);
        res.cookie("token", token)
        res.status(201).json({message: `Welcome ${fullUserDetails.first_name}`, token})
      } catch (error) {
        res
          .status(500)
          .json(
            'Account registered, but error retrieving coach or student details',
          );
      }
    }
  } catch (error) {
    res.status(500).json({
      message: `Unable to register account ${error.message}`,
    });
  }
};

exports.login = async (req, res, next) => {
  const { username, email, password} = req.body;
  
  try {
    if(username){
      const user = await Users.findByForLogin({username});
      
      if (user && bcrypt.compareSync(password, user.password)
      ) {
      const token = generateToken(user.id);
      res.cookie("token", token)
      const Welcome = { message: `Welcome Back ${user.first_name}!`,token}
      res.status(200).json(Welcome);
    } else {
      res
        .status(401)
        .json({ message: 'Email or password is incorrect' });
    }
    
    } else {
      const user = await Users.findByForLogin({email});
           if (user && bcrypt.compareSync(password, user.password)
        
    ) {
      const token = generateToken(user.id);
      res.cookie("token", token)
      const Welcome = { message: `Welcome Back ${user.first_name}!`,token}
      res.status(200).json(Welcome);
    } else {
      res
        .status(401)
        .json({ message: 'Email or password is incorrect' });
    }
    }
        
  } catch (error) {
    next(error)
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await Users.remove(req.params.id);
    if (user) {
      res.status(200).json({
        message: 'User deleted',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not delete user' });
  }
};

exports.put = async (req, res) => {
  try {
    const updatedUser = await Users.update(req.params.id, req.body);
    if (updatedUser) {
      res.status(200).json({
        updatedUser,
        message: 'user updated successfully',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update user' });
  }
};

exports.putSettings = async (req, res) => {
    try {
      const email = req.body.oldEmail;
      const copyBody = {email:req.body.email};
   
    const updatedUser = await Users.updateSettings(email, copyBody);
    
    if (updatedUser) {
      res.status(200).json({
       updatedUser,
       message: 'User Email updated successfully',
      });
    // eslint-disable-next-line no-unused-expressions
    }else ( error => {
      res.status(400).json({
         message: error.message,
      });
    })
  } catch (error) {
    res.status(500).json({ message: 'Unable to update user' });
  }
};
