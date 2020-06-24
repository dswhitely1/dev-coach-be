const router = require('express').Router();
const corsfix = require("../../utils/cors")

const feedbackController = require('./feedback-controllers');
const checkAuth = require('../../utils/check-auth');

router.get('/:id', checkAuth, corsfix, feedbackController.feedback);
// id is the student or coach id
router.post('/', checkAuth, feedbackController.addFeedback);

module.exports = router;