const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
}  = require('../controllers/productController');

router.route('/').get(getAllProducts).post(createProduct);;
router.route('/:id').get(getProduct).patch(updateProduct);

module.exports = router;
