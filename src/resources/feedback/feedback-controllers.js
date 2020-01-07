const Feedback = require('./feedback-model');

exports.feedback = async (req, res) => {
  try {
    const feedback = await Feedback.get_Feedback(
      req.params.id,
    );

    if (feedback) {
      res.status(200).json({
        feedback,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Could not find any feedback' });
  }
};

exports.add_feedback = async (req, res) => {
  try {
    const feedback = await Feedback.add(req.body);
    if (feedback) {
      res.status(200).json({
        feedback,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'You dont can make this feedback' });
  }
};
