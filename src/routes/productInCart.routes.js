const { Router } = require('express');
const { createNewProductInCart, purchasedCart } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/product-in-cart', authenticate, createNewProductInCart);

router.put('/product-in-cart/:cartId', authenticate, purchasedCart);

module.exports = router;