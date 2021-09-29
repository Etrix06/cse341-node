const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST     I'm not sure why he added this here.
router.post('/add-product', productsController.postAddProduct);

module.exports = router;