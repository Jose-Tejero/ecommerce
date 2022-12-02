const { Router } = require('express');
const { createNewCart, viewMyCart } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/carts', authenticate, createNewCart);

router.get('/carts/:userId/:id', authenticate, viewMyCart);

module.exports = router;