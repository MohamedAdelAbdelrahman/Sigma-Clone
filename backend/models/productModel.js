const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    trim: true,
    required: [true, 'Please provide product name'],
    maxLength: [100, 'Name can not be more than 100 characters'],
    timestamps: true,
  },
  
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    default: 0,
  },
  
  description: {
    type: String,
    required: [true, 'Please provide product description'],
    maxLength: [1000, 'Description can not be more than 1000 characters'],
  },
  
  image: {
    type: String,
    default: '/uploads/example.jpeg',
  },
  
  category: {
    type: String,
    required: [true, 'Please provide product category'],
    enum: [],
  },
  
  quantity:{type: Number},
  
  seller:{type: String,
          trim: true
    },

  price:{type: Number},

  brand:{enum:[]},

  model:{type: String,
         trim: true
    },

  quantity:{type: Number},

  seller:{type: String,
          trim: true
        },
})


module.exports = mongoose.model('Product', ProductSchema);


