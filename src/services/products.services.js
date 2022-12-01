const { Products } = require('../models');

class ProductsServices {
  static async getAll() {
    try {
      const result = await Products.findAll({
        where: {
          availableQty: {
            gt: 0,
          },
        },
      });
      return result;
    } catch (error) {

    }
  };
};

module.exports = {
  ProductsServices,
};