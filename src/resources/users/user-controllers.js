const bcrypt = require('bcryptjs');
const Users = require('./user-model');

const generateToken = require('../../utils/generate-token');

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
        try {
          const fullUserDetails = await Users.findByForLogin({
            email: newUser.email,
          });
          const token = generateToken(newUser.id);
          res.status(201).json({
            message: `Welcome ${newUser.first_name}`,
            token,
            user: {
              id: fullUserDetails.id,
              first_name: fullUserDetails.first_name,
              last_name: fullUserDetails.last_name,
              email: fullUserDetails.email,
              location: fullUserDetails.location,
              role_id: fullUserDetails.role_id,
              avatar_url: '',
            },
          });
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
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          location: user.location,
          role_id: user.role_id,
          avatar_url: user.avatar_url,
        },
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
    const updatedUser = await Users.update(req.body, req.body);
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
