const express = require('express');
const router = express.Router();
const { authorizePermissions } = require('../middleware/authentication');

const {
  showCurrentUser,
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addProductToCartByEmail,
  getAllProductInCart,
  getAllProductInCartByEmail,
  deleteProductFromCartByEmail,
} = require('../controllers/userController');

router
  .route('/')
  .get(authorizePermissions('admin'), getAllUsers)
  .post(createUser);

router.route('/showMe').get(showCurrentUser);

router
  .route('/:userEmail/cart')
  .get(getAllProductInCartByEmail)
  .post(addProductToCartByEmail);

router
  .route('/:userEmail/cart/:productId')
  .delete(deleteProductFromCartByEmail);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
