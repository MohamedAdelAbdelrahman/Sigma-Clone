const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email } = req.body;

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ msg: 'Email already exists' });
  }

  const user = await User.create(req.body);

  const tokenUser = {
    userId: user._id,
    name: user.name,
  };

  const token = jwt.sign(tokenUser, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME || '1d',
  });

  res.status(201).json({ user: tokenUser, token });
};

const login = async (req, res) => {
  res.status(200).json({ msg: 'user loggedin' });
};

const logout = async (req, res) => {
  res.status(200).json({ msg: 'user loggedin' });
};

module.exports = {
  register,
  login,
  logout,
};
