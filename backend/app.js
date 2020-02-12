const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_DNS });

const app = express();
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/'));
});
module.exports = app;
