const mongoose = require('mongoose');

const connectDB = (url) =>
  mongoose.connect(url).then(console.log('Connected to DB...'));

module.exports = connectDB;
