const { Products, Users } = require('../models');
const { Op } = require('sequelize');

class ProductsServices {
  static async getAll() {
    try {
      const result = await Products.findAll({
        where: {
          availableQty: {
            [Op.gt]: 0,
          }
        },
        attributes: ['image', 'name'],
        include: {
          model: Users,
          as: 'item',
          attributes: ['username'],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async createNewProduct(newProduct) {
    try {
      const result = await Products.create(newProduct)
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  ProductsServices,
};