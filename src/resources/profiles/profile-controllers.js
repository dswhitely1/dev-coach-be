const Profile = require('./profile-models');

exports.coaches = async (req, res) => {
  try {
    const coaches = await Profile.get_coaches();
    if (coaches) {
      res.status(200).json({
        coaches,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not find any coaches.' });
  }
};
