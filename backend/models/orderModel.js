const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
