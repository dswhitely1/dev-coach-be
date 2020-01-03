const router = require('express').Router();

const paymentController = require('./payment-controllers');

router.post('/stripe', paymentController.stripe);

module.exports = router;