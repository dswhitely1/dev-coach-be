const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74',
  key:
    '99c25bda-a15a-4247-8a6c-5c152975240e:IIvhll4k19DorTpn6MYuo3YlNI3qGQjKQuX5F9WX7N4=',
});

exports.chat = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await chatkit.createUser({
      id: email,
      name: email,
    });

    if (user) {
      res.status(201).json({ user });
    }
  } catch (error) {
    if (
      error.error_type === 'services/chatkit/user/user_already_exists'
    ) {
      res.sendStatus(200);
    } else {
      res.status(error.statusCode).json(error);
    }
  }
};
