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
  AllProductInCart,
  deleteCart,
} = require('../controllers/userController');

router
  .route('/')
  .get(authorizePermissions('admin'), getAllUsers)
  .post(createUser);

router.route('/showMe').get(showCurrentUser);

router
  .route('/cart')
  .get(AllProductInCart)
  .post(addProductToCart)
  .delete(deleteCart);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
