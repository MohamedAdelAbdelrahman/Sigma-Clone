const User = require('../models/userModel');
const { createTokenUser, attachCookiesToResponse } = require('../utils');

const register = async (req, res) => {
  const { email } = req.body;

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ msg: 'Email already exists' });
  }

  const user = await User.create({ ...req.body, role: 'user' });

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(201).json({ user: tokenUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please provide email and password' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const isPasswordCorrect = await user.checkPassword(password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(200).json({ user: tokenUser });
};

const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });

  res.status(200).json({ msg: 'user logged out' });
};

module.exports = {
  register,
  login,
  logout,
};
