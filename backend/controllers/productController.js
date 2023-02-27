const { StatusCodes } = require('http-status-codes');

const getAllProducts = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'all products' });
};

const getProduct = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'update product' });
};

const updateProduct = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'get product' });
};

// const createProduct = (req, res) => {
//   res.status(StatusCodes.CREATED).json({ msg: 'create product' });
// };

module.exports = {
  getAllProducts,
  getProduct,
  updateProduct,
  //   createProduct,
};
