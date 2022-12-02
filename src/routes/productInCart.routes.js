const { Router } = require('express');
const { createNewProductInCart } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/product-in-cart', authenticate, createNewProductInCart);

module.exports = router;