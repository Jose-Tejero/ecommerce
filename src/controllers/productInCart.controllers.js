const { ProductInCartServices, CartsServices, OrdersServices, ProductInOrderServices } = require('../services');

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
    const search = await CartsServices.searchCart(cartId);
    const { userId } = search;
    if (search) {
      const newOrder = await OrdersServices.createOrder(userId);
      const { id } = newOrder;
      const newProductInOrder = await ProductInCartServices.getAllPending();
      newProductInOrder.forEach(async (product) => await ProductInOrderServices.createProductInOrder(id, product));
      const result = await ProductInCartServices.updateCart(cartId);
      res.status(200).json({ message: 'El carrito ha sido comprado' });
    } else {
      res.status(400).json({ message: 'El carrito no existe' });
    }
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