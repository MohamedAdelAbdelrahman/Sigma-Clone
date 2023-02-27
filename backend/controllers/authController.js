const { StatusCodes } = require('http-status-codes');

const register = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: 'user registered' });
};

const login = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'user loggedin' });
};

const logout = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'user loggedin' });
};

module.exports = {
  register,
  login,
  logout,
};
