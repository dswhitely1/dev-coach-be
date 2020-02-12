const router = require('express').Router();

const feedbackController = require('./feedback-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, feedbackController.feedback);
router.post('/', checkAuth, feedbackController.addFeedback);

module.exports = router;