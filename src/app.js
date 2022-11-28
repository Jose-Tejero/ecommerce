const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const app = express();
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');

app.use(express.json());
// app.use(morgan('dev'));
app.use(cors());

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((error) => console.log(error));

db.sync({ alter: true })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));

app.get('/', () => {
  console.log('Todo bien');
});

app.use(handleError);

module.exports = app;