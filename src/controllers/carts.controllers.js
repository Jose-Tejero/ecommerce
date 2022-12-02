const { CartsServices } = require('../services');

const createNewCart = async (req, res, next) => {
  try {
    const newCart = req.body;
    const result = await CartsServices.createCart(newCart);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'No se pudo crear el carrito',
    });
  }
};

const viewMyCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await CartsServices.getCart(userId);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'No se pudo obtener el carrito',
    });
  }
};

module.exports = {
  createNewCart,
  viewMyCart,
};