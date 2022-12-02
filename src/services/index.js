const { UsersServices } = require('../services/users.services');
const { AuthServices } = require('../services/auth.services');
const { ProductsServices } = require('../services/products.services');
const { CartsServices } = require('../services/carts.services');
const { ProductInCartServices } = require('../services/productInCart.services');

module.exports = {
  UsersServices,
  AuthServices,
  ProductsServices,
  CartsServices,
  ProductInCartServices,
};