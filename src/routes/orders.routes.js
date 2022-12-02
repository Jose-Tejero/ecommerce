const { Router } = require('express');
const { getAllOrders } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.get('/orders/:id', authenticate, getAllOrders);

module.exports = router;