const { ProductInCartServices } = require('../services');

const createNewProductInCart = async (req, res, next) => {
  try {
    const newProductInCart = req.body;
    const result = await ProductInCartServices.createProductInCart(newProductInCart);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'No se pudo agregar el producto al carrito',
    });
  }
};

module.exports = {
  createNewProductInCart,
}