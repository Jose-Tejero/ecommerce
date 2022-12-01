const { Router } = require('express');
const { getAllProducts, createProduct } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.get('/products', authenticate, getAllProducts);

router.post('/products', authenticate, createProduct)

module.exports = router;