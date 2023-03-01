const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
} = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser);

module.exports = router;
