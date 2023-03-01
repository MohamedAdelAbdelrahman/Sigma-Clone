const { StatusCodes } = require('http-status-codes');

const register = (req, res) => {
  res.status(201).json({ msg: 'user registered' });
};

const login = (req, res) => {
  res.status(200).json({ msg: 'user loggedin' });
};

const logout = (req, res) => {
  res.status(200).json({ msg: 'user loggedin' });
};

module.exports = {
  register,
  login,
  logout,
};
