const stripe = require('stripe')(
  'sk_test_j5vEAa5mDDXxAZ0D0KJ3lH3x00tu6gpneX',
);
const uuid = require('uuid/v4');

exports.stripe = async (req, res) => {
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuid();
    await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      },
    );
    res.status(200).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ error, status: 'failure' });
  }
};
