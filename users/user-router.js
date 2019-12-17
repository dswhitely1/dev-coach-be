const express = require('express');

const router = express.Router();

const Users = require('../auth/auth-model');

// GET request - for testing connection
router.get('/', (req, res) => {
  Users.find()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({ message: 'error ' + error.message });
    });
});

module.exports = router;
