const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '929598',
  key: '9ebd578e6fc08eeb098e',
  secret: '123a01ef8b0d8442bd0b',
  cluster: 'eu',
  useTLS: true,
});

exports.video = async (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
};
