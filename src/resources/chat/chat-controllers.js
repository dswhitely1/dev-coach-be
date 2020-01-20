const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
  instanceLocator: process.env.PUSHER_INSTANCE,
  key: process.env.PUSHER_CHAT_KEY,
});

exports.chat = (req, res) => {
  const { email } = req.body;

  chatkit
    .createUser({
      id: email,
      name: email,
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.statusCode).json(error);
      }
    });
};

exports.authenticate = (req, res) => {
  const { grant_type } = req.body;
  res.json(
    chatkit.authenticate({ grant_type, userId: req.query.user_id }),
  );
};
