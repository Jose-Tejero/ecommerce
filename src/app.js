const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const app = express();
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const { userRoutes, authRoutes } = require('./routes');

app.use(express.json());
// app.use(morgan('dev'));
app.use(cors());

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((error) => console.log(error));

db.sync({ alter: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));

initModels();

app.get('/', () => {
  console.log('Todo bien');
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);

app.use(handleError);

module.exports = app;