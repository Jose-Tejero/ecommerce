const { Orders } = require('../models');

class OrdersServices {
  static async createOrder(userId) {
    try {
      const result = await Orders.create({ userId });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getAll(id) {
    try {
      const result = await Orders.findAll({ where: { userId: id } });
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  OrdersServices,
};