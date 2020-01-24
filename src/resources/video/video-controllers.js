const Pusher = require('pusher');

const channels = [];

const pusher = new Pusher({
  appId: process.env.PUSHER_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
});

exports.auth = (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;

  const auth = pusher.authenticate(socketId, channel);
  return res.send(auth);
};

exports.login = async (req, res) => {
  const { channel, username } = req.body;

  const channel_index = channels.findIndex(c => c.name === channel);
  if (channel_index === -1) {

    channels.push({
      name: channel,
      users: [username],
    });

    return res.send('ok');
  }

  if (channels[channel_index].users.indexOf(username) === -1) {
    channels[channel_index].users.push(username);

    return res.send('ok');
  }

  return res.status(500).send('invalid user');
};

exports.users = async (req, res) => {
  const { channel, username } = req.body;
  const channel_data = channels.find((ch) => {
    return ch.name === channel;
  });

  let channel_users = [];
  if (channel_data) {
    channel_users = channel_data.users.filter((user) => {
      return user !== username;
    });
  }

  return res.json({
    users: channel_users
  });
};