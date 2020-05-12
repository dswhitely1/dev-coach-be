const express = require("express");
require('dotenv')

const router = express.Router()
const SecretKey = process.env.STRIPE_SECRET_KEY;
// const PublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require("stripe")(SecretKey);
const checkAuth = require('../../utils/check-auth');

router.get('/secret', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.price,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'}
  });
  res.json({client_secret: paymentIntent.client_secret});
});

module.exports = router