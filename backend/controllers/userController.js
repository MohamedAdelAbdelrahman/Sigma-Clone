const User = require('../models/userModel');
const Product = require('../models/productModel');

const showCurrentUser = async (req, res) => {
  res.status(200).json({ user: req.user });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });

    if (!user) {
      return res.status(404).json({ msg: `no user with the id : ${userID}` });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ msg: `no user with the id : ${userID}` });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndDelete({ _id: userID });

    if (!user) {
      return res.status(404).json({ msg: `no user with the id : ${userID}` });
    }

    res.status(204).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//*create cart
const addProductToCart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.user.userId });
    const productIndex = userData.cart.indexOf(req.body.productId);
    if (productIndex !== -1) {
      return res.status(200).send();
    }

    const product = await User.updateOne(
      { _id: req.user.userId },
      { $push: { cart: req.body.productId } }
    );
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllProductInCart = async (req, res) => {
  try {
    const carts = await User.find({ _id: req.user.userId }).select('cart');
    let productItems = [];
    let total = 0;

    for (const product of carts) {
      const dbProduct = await Product.findById({ _id: product.cart });
      if (!dbProduct) {
        return res.status(404).json({ msg: 'product not found' });
      }
      productItems.push(dbProduct);
      total += dbProduct.price;
    }

    res.status(200).json({ total, productItems });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const removeProduct = await User.updateOne(
      { _id: req.user.userId },
      { $pull: { cart: req.body.productId } }
    );
    res.status(201).json({ removeProduct });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  showCurrentUser,
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addProductToCart,
  getAllProductInCart,
  deleteProductFromCart,
};
