const User = require('../models/userModel');

const register = async (req, res) => {
  const { email } = req.body;

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ msg: 'Email already exists' });
  }

  const user = await User.create({ ...req.body, role: 'user' });

  const tokenUser = {
    userId: user._id,
    name: user.name,
    role: user.role,
  };

  const token = user.createJWT();

  res.status(201).json({ user: tokenUser, token });
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

  const token = user.createJWT();

  res.status(200).json({ user: { name: user.name }, token });
};

const logout = async (req, res) => {
  res.status(200).json({ msg: 'user loggedin' });
};

module.exports = {
  register,
  login,
  logout,
};
