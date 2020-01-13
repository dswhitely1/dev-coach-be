const bcrypt = require('bcryptjs');
const Users = require('./user-model');

const generateToken = require('../../utils/generate-token');

exports.getUsers = async (req, res) => {
  const users = Users.find();
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
    const user = await Users.findByForLogin({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user.id);
      res.status(200).json({
        message: `Welcome Back ${user.first_name}!`,
        token,
        user,
      });
    } else {
      res
        .status(401)
        .json({ message: 'Email or password is incorrect' });
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

exports.put = async (req, res) => {
  try {
    const updatedUser = await Users.update(req.params.id, req.body);
    if (updatedUser) {
      res.status(200).json({
        updatedUser,
        message: 'Your profile has been updated successfully',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update user' });
  }
};
