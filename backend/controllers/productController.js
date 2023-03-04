const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  const queryObject = {};

  const { category, name, sort } = req.query;

  if (category) {
    queryObject.category = { $regex: category, $options: 'i' };
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  try {
    const products = await result;

    res.status(200).json({ count: products.length, products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id: productID } = req.params;
    const product = await Product.findOne({ _id: productID });

    if (!product) {
      return res
        .status(404)
        .json({ msg: `no product with the id : ${productID}` });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id: productID } = req.params;
    const product = await Product.findOneAndUpdate(
      { _id: productID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res
        .status(404)
        .json({ msg: `no product with the id : ${productID}` });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findOneAndDelete({ _id: productId });

    if (!product) {
      return res
        .status(404)
        .json({ msg: `no product with the id : ${productId}` });
    }

    res.status(204).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const products = await Product.find({}).select('name');
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  getAllCategories,
};
