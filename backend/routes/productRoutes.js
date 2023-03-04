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
const checkAdminMiddleware = require('../middleware/checkAdminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router
  .route('/')
  .get(getAllProducts)
  .post(authMiddleware, checkAdminMiddleware, createProduct);

router.route('/categories').get(getAllCategories);

router
  .route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(authMiddleware, checkAdminMiddleware, deleteProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
