const { userRegister } = require('./users.controllers');
const { userLogin } = require('./auth.controllers');
const { getAllProducts, createProduct } = require('./products.controllers');
const { createNewCart } = require('./carts.controllers');
const { createNewProductInCart } = require('./productInCart.controllers');

module.exports = {
  userRegister,
  userLogin,
  getAllProducts,
  createProduct,
  createNewCart,
  createNewProductInCart,
};