const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
}  = require('../controllers/productController');
const {uploadProductImage} = require('../controllers/UploadsController');

router.route('/').get(getAllProducts).post(createProduct);;
router.route('/:id').get(getProduct).patch(updateProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
