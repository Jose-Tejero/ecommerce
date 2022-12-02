const { Carts, ProductInCart, Products } = require('../models');

class CartsServices {
  static async createCart(newCart) {
    try {
      const result = await Carts.create(newCart);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getCart(userId) {
    try {
      const result = await Carts.findAll({
        where: {
          userId,
        },
        attributes: ['id', 'userId'],
        include: {
          model: ProductInCart,
          attributes: ['id', 'cartId', 'productId', 'quantity', 'price', 'status'],
          include: {
            model: Products,
            attributes: ['name', 'image'],
          },
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  CartsServices,
};