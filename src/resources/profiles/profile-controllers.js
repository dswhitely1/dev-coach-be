const Profile = require('./profile-models');
const Helpers = require('../../utils/modelHelpers.js');

exports.coaches = async (req, res) => {
  try {
    const coaches = await Profile.getCoaches();
    if (coaches) {
      res.status(200).json({
        coaches,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not find any coaches' });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const student = await Helpers.add(req.body, 'students');
    if (student) {
      res.status(200).json({
        student,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to add new student' });
  }
};

exports.addCoach = async (req, res) => {
  try {
    const coach = await Helpers.add(req.body, 'coaches');
    if (coach) {
      res.status(200).json({
        coach,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to add new coach' });
  }
};
