const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
  instanceLocator: process.env.PUSHER_INSTANCE,
  key: process.env.PUSHER_CHAT_KEY,
});

exports.createUser = (req, res) => {
  const { username } = req.body;

  chatkit
    .createUser({
      id: username,
      name: username,
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

exports.auth = (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });

  res.status(authData.status).send(authData.body);
};

exports.createRoom = (req, res) => {
  const { creatorId, name, userIds } = req.body;

  chatkit
    .createRoom({
      creatorId,
      name,
      userIds,
    })
    .then(() => {
      res.status(200).json({ message: 'Room created successfully' });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error, message: 'Room created successfully' });
    });
};
