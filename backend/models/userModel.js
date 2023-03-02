const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'name cannot be empty'],
  },
  email: {
    type: String,
    //! check 280
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ,
      'Please provide valid email',
    ],
    unique: [true, 'email is already exist'],
    trim: true,
    required: [true, 'email cannot be empty'],
  },
  password: {
    type: String,
    required: [true, 'password cannot be empty'],
    minlength: [8, 'password cannot be less than 8 characters'],
  },
  city: {
    type: String,
    enum: ['alexandria', 'cairo', 'aswan', 'luxor', 'giza', 'mansoura'],
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  wishlist: { type: Array },
});

// Hashing user's password
UserSchema.pre('save', async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.checkPassword = async function (candidatePassword) {
  const isMatch = await bcryptjs.compare(candidatePassword, this.password);
  return isMatch;
};

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      name: this.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME || '1d',
    }
  );
};

module.exports = mongoose.model('User', UserSchema);
