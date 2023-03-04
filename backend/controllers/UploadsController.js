const path = require('path')

const uploadProductImage = async (req, res) => {
    const productImage = req.files.image;

  const imagePath = path.join(__dirname,'../public/uploads/'+`productImage.name`);
     await productImage.mv(imagePath);
  return res.status(200).json({image:{src:`/uploads/${productImage.name}`}});
  
};

module.exports = {
  uploadProductImage,
}