const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const productsRoutes = require('./products.routes')
const cartsRoutes = require('./carts.routes');
const productInCartRoutes = require('./productInCart.routes');
const ordersRoutes = require('./orders.routes');

module.exports = {
  usersRoutes,
  authRoutes,
  productsRoutes,
  cartsRoutes,
  productInCartRoutes,
  ordersRoutes,
};