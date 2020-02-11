const Feedback = require('./feedback-model');
const ModelHelper = require('../../utils/modelHelpers');

exports.feedback = async (req, res) => {
  try {
    const feedback = await Feedback.getFeedback(
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

exports.addFeedback = async (req, res) => {
  try {
    const feedback = await ModelHelper.add(req.body, 'appointment_feedback');
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
