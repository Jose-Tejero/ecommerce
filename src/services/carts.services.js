const { Carts } = require('../models');

class CartsServices {
  static async createCart(newCart) {
    try {
      const result = await Carts.create(newCart);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  CartsServices,
};