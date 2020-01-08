const router = require('express').Router();

const paymentController = require('./payment-controllers');
const checkAuth = require('../../utils/check-auth');

router.post('/stripe', checkAuth, paymentController.stripe);

module.exports = router;