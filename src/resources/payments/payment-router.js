require('dotenv')
const express = require('express');

const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const checkAuth = require('../../utils/check-auth');
const corsfix = require("../../utils/cors");

router.use(express.json());

// router.get('/public-key', checkAuth, (req, res) => {
//   res.send({ publicKey: process.env.STRIPE_PUBLIC_KEY });
// });

// router.post('/create-customer', checkAuth, async (req, res) => {

//   const customer = await stripe.customers.create({
//     payment_method: req.body.payment_method,
//     email: req.body.email,
//     invoice_settings: {
//       default_payment_method: req.body.payment_method
//     }
//   });

//   const subscription = await stripe.subscriptions.create({
//     customer: customer.id,
//     items: [{ plan: process.env.SUBSCRIPTION_PLAN_ID }],
//     expand: ['latest_invoice.payment_intent']
//   });
//   res.send(subscription);
// });

// router.post('/subscription', checkAuth, async (req, res) => {
//   const subscription = await stripe.subscriptions.retrieve(req.body.subscriptionId);
//   res.send(subscription);
// });

router.get('/secret', checkAuth, corsfix, async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.price,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'}
  });
  res.json({client_secret: paymentIntent.client_secret});
});

module.exports = router