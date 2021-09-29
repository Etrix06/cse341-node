const path = require('path');  // not in video, added to solve an error

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;