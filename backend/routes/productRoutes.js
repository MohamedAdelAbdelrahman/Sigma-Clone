const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
} = require('../controllers/productController');
const checkAdminMiddleware = require('../middleware/checkAdminMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router
  .route('/')
  .get(getAllProducts)
  .post(authMiddleware, checkAdminMiddleware, createProduct);
router.route('/:id').get(getProduct).patch(updateProduct);

module.exports = router;
