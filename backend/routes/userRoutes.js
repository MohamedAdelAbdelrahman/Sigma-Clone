const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addProductToCart,
  AllProductInCart,
  deleteCart,
} = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/cart').get(AllProductInCart).post(addProductToCart).delete(deleteCart);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);


module.exports = router;
