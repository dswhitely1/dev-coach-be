const router = require('express').Router();

const feedbackController = require('./feedback-controllers');

router.get('/:id', feedbackController.feedback);
// id is the student id (we need to consider that we could add a feedback for the coach also in the future)
module.exports = router;