const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllCategories,
} = require('../controllers/productController');
const { uploadProductImage } = require('../controllers/UploadsController');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

router
  .route('/')
  .get(getAllProducts)
  .post(authenticateUser, authorizePermissions('admin'), createProduct);

router.route('/categories').get(getAllCategories);

router
  .route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(authenticateUser, authorizePermissions('admin'), deleteProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
