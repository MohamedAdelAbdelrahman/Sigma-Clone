const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'all products' });
};

const getProduct = (req, res) => {
  res.status(200).json({ msg: 'update product' });
};

const updateProduct = (req, res) => {
  res.status(200).json({ msg: 'get product' });
};

// const createProduct = (req, res) => {
//   res.status(201).json({ msg: 'create product' });
// };

module.exports = {
  getAllProducts,
  getProduct,
  updateProduct,
  //   createProduct,
};
