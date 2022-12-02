const { OrdersServices } = require('../services');

const getAllOrders = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OrdersServices.getAll(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'No se pudo obtener todas las órdenes de compra, intenta más tarde',
    });
  }
};

module.exports = {
  getAllOrders,
};