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

const purchasedCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const result = await ProductInCartServices.updateCart(cartId);
    res.status(200).json({ message: 'El carrito ha sido comprado' });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'No se pudo comprar el carrito',
    });
  }
};

module.exports = {
  createNewProductInCart,
  purchasedCart,
}