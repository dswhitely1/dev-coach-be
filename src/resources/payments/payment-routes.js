const router = require('express').Router();

const paymentController = require('./payment-controllers');

router.post('/stripe', paymentController.appointments);

module.exports = router;