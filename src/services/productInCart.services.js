const { ProductInCart } = require('../models');

class ProductInCartServices {
  static async createProductInCart(newProductInCart) {
    try {
      const result = await ProductInCart.create(newProductInCart);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  ProductInCartServices,
};