const {
  Users,
  Products,
  Carts,
  Orders,
  ProductInCart,
  ProductInOrder,
} = require('./index');

const initModels = () => {

  Users.hasMany(Products, { as: 'item', foreignKey: 'user_id' });
  Products.belongsTo(Users, { as: 'item', foreignKey: 'user_id' });

  Users.hasMany(Orders, { as: 'ticket', foreignKey: 'user_id' });
  Orders.belongsTo(Users, { as: 'ticket', foreignKey: 'user_id' });

  Users.hasOne(Carts, { as: 'cart', foreignKey: 'user_id' });
  Carts.belongsTo(Users, { as: 'cart', foreignKey: 'user_id' });

  Carts.hasMany(ProductInCart);
  ProductInCart.belongsTo(Carts);
  Products.hasMany(ProductInCart);
  ProductInCart.belongsTo(Products);

  Orders.hasMany(ProductInOrder);
  ProductInOrder.belongsTo(Orders);
  Products.hasMany(ProductInOrder);
  ProductInOrder.belongsTo(Products);

};

module.exports = initModels;