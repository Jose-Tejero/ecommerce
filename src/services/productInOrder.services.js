const { ProductInOrder } = require('../models');

class ProductInOrderServices {
  static async createProductInOrder(id, product) {
    try {
      const { productId, quantity, price } = product;
      const result = await ProductInOrder.create({ orderId: id, productId, quantity, price });
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  ProductInOrderServices,
};