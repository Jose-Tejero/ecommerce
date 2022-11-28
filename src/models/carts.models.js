const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Carts = db.define('carts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.00,
  },
});

module.exports = Carts;