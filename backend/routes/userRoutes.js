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
  deleteProductFromCart,
  deleteProductFromCartByEmail,
} = require('../controllers/userController');

router
  .route('/')
  .get(authorizePermissions('admin'), getAllUsers)
  .post(createUser);

router.route('/showMe').get(showCurrentUser);

router.route('/cart').get(getAllProductInCart).delete(deleteProductFromCart);
// .post(addProductToCart)
router
  .route('/cart/:userEmail')
  .get(getAllProductInCartByEmail)
  .post(deleteProductFromCartByEmail);

router.route('/cart/:userEmail/add').post(addProductToCartByEmail);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
