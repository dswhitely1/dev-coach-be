const router = require('express').Router();

const feedbackController = require('./feedback-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, feedbackController.feedback);
// id is the student id (we need to consider that we could add a feedback for the coach also in the future)
router.post('/', checkAuth, feedbackController.addFeedback);

module.exports = router;