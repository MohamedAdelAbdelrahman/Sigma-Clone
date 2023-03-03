const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const checkAdminMiddleware = require('../middleware/checkAdminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router
  .route('/')
  .get(getAllProducts)
  .post(authMiddleware, checkAdminMiddleware, createProduct);
router
  .route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(authMiddleware, checkAdminMiddleware, deleteProduct);

module.exports = router;
