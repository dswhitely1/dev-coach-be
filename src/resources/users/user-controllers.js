const bcrypt = require('bcryptjs');
const Users = require('./user-model');

const generateToken = require('../../utils/generate-token');

exports.register = async (req, res) => {
  const user = await Users.findBy({ email: req.body.email });
  if (user) {
    res.status(409).json({
      message: 'Email already exists',
    });
  } else {
    try {
      const newUser = await Users.add({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        location: req.body.location,
      });

      if (newUser) {
        const token = generateToken(newUser.id);
        res.status(201).json({
          message: `Welcome ${newUser.first_name}`,
          token,
          user_id: newUser.id,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: `Unable to register account ${error.message}`,
      });
    }
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findBy({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user.id);
      res.status(200).json({
        message: `Welcome Back ${user.first_name}!`,
        token,
      });
    } else {
      res.status(401).json({ message: 'Auth Failed' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Unable to login ${error.message}` });
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

exports.details = async (req, res) => {
  try {
    const user = await Users.user_details(req.body.role, req.params.id);
    if (user) {
      res.status(200).json({
        message: user,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not delete user' });
  }
};
