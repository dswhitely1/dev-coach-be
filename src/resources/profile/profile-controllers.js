const Profile = require('./profile-model');

exports.details = async (req, res) => {
  try {
    const user = await Profile.user_details(req.body.role, req.params.id);
    if (user) {
      res.status(200).json({
        user,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not find user' });
  }
};

exports.coaches = async (req, res) => {
  try {
    const coaches = await Profile.get_coaches();
    if (coaches) {
      res.status(200).json({
        coaches,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Could not find any coaches' });
  }
};