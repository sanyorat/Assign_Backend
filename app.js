const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chatRouter = require('./routes/chatRoutes');

const app = express();
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.get('/', (req, res) =>
//   res.status(200).json({ message: 'Hello from the server' })
// );

// app.post('/post', (req, res) => {
//   res.send('POST request to the homepage');
// });

//Routes

app.use('/api/v1/chat', chatRouter);

module.exports = app;
