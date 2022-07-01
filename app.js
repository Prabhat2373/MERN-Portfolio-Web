const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const webRouter = require('./routes/webRouter');
const cors = require('cors');
const path = require('path');
const cors = require('cors');

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/public')));
// app.use('./React-front/public', express.static('React-front'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', webRouter);

app.use('*', (req, res, next) => {
  res.status(404).send(`<h1>Can't find your url : ${req.originalUrl}</h1>`);

  next();
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
