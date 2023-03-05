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
  addProductToCart,
  getAllProductInCart,
  getAllProductInCartByEmail,
  deleteProductFromCart,
} = require('../controllers/userController');

router
  .route('/')
  .get(authorizePermissions('admin'), getAllUsers)
  .post(createUser);

router.route('/showMe').get(showCurrentUser);

router
  .route('/cart')
  .get(getAllProductInCart)
  .post(addProductToCart)
  .delete(deleteProductFromCart);
router.route('/cart/:userEmail').get(getAllProductInCartByEmail);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
