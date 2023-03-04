const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide product name'],
    maxLength: [100, 'Name can not be more than 100 characters'],
    timestamps: true,
  },

  price: {
    type: Number,
    required: [true, 'Please provide product price'],
  },

  description: {
    type: String,
    maxLength: [1000, 'Description can not be more than 1000 characters'],
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: [true, 'Please provide product category'],
  },

  quantity: { type: Number, min: 0 },

  seller: { type: String, trim: true },

  brand: { type: String },

  model: { type: String, trim: true },

  seller: { type: String, trim: true, enum: ['Sigma'] },
});

module.exports = mongoose.model('Product', ProductSchema);
