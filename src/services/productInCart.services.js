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

  static async updateCart(cartId) {
    try {
      const result = await ProductInCart.update({ status: 'purchased' }, { where: { cartId } });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getAllPending() {
    try {
      const result = await ProductInCart.findAll({
        where: { status: 'pending' },
        attributes: ['productId', 'quantity', 'price'],
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  ProductInCartServices,
};