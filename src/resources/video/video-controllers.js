const Pusher = require('pusher');

let channels = [];

const pusher = new Pusher({
  appId: process.env.PUSHER_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
});

exports.auth = (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  console.log('logging in...');
  const auth = pusher.authenticate(socketId, channel);
  return res.send(auth);
};
