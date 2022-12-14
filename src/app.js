const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const app = express();
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const { usersRoutes, authRoutes, productsRoutes, cartsRoutes, productInCartRoutes, ordersRoutes } = require('./routes');
const transporter = require('./utils/mailer')

app.use(express.json());
// app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((error) => console.log(error));

db.sync({ alter: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));

transporter.verify()
  .then(() => console.log('Estamos listos para enviar correos'));

app.get('/', () => {
  console.log('Todo bien');
});

app.use('/api/v1', usersRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productsRoutes);
app.use('/api/v1', cartsRoutes);
app.use('/api/v1', productInCartRoutes)
app.use('/api/v1', ordersRoutes)

app.use(handleError);

module.exports = app;