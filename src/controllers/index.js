const { userRegister } = require('./users.controllers');
const { userLogin } = require('./auth.controllers');
const { getAllProducts, createProduct } = require('./products.controllers');

module.exports = {
  userRegister,
  userLogin,
  getAllProducts,
  createProduct,
};