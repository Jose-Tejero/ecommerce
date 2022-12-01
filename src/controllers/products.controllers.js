const { ProductsServices } = require('../services');

const getAllProducts = async (req, res, next) => {
  try {
    const result = await ProductsServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo ocurrió al tratar de obtener los productos, intente de nuevo por favor.',
    });
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductsServices.createNewProduct(newProduct);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo ocurrió al tratar de crear un producto, intente de nuevo por favor.',
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};