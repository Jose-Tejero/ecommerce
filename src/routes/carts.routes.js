const { Router } = require('express');
const { createNewCart } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/carts', authenticate, createNewCart);

module.exports = router;