const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const cookieParser = require("cookie-parser")
const morgan = require('morgan')
const userRouter = require('./src/resources/users/user-router');
const appointmentRouter = require('./src/resources/appointments/appointments-router');
const profileRouter = require('./src/resources/profiles/profile-router');
const paymentRouter = require('./src/resources/payments/payment-router');
const feedbackRouter = require('./src/resources/feedback/feedback-router');
const videoRouter = require('./src/resources/video/video-router');
// const chatRouter = require('./src/resources/chat/chat-router');
// const editorRouter = require('./src/resources/editor/editor-router');


const server = express();

// plug middleware & connections
server.use(helmet());
server.use(cors({origin: true, credentials: true}));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser())
server.use(morgan())

// catch-all endpoint
server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Dev Coach API' });
});
server.use(cookieParser())
server.use('/user', userRouter);
server.use('/appointment', appointmentRouter);
server.use('/profile', profileRouter);
server.use('/payment', paymentRouter);
server.use('/feedback', feedbackRouter);
server.use('/video', videoRouter);
// server.use('/chat', chatRouter);
// server.use('/editor', editorRouter);

// catch-all endpoint
server.all('*', (req, res) => {
  res.status(404).send({
    error: 'The resource you are looking for does not exist',
  });
});

const port = process.env.PORT || 5000;
/* 
  With respect to listen EADDRINUSE :::5000 error returned when testing
  The problem is this: once the execution of the first test ends, the server is still listening on the port 5000. So when we require('../index') again in the second test file, it errors out because is port is still in use by the previous test file’s process.
  One simple fix for this issue is wrapping our app.listen() in a condition to check if the environment is a test environment or not. In a test environment, when running the server through Supertest, we do not really need to have the app listen on a network port.
  For more read https://blog.campvanilla.com/jest-expressjs-and-the-eaddrinuse-error-bac39356c33a
*/
if (process.env.NODE_ENV !== 'test') {
  server.listen(port, console.log(`Listening on Port ${port}`));
}
module.exports = server;
