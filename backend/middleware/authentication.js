const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    return res.status(401).json({ msg: 'Authentication Invalid' });
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Authentication Invalid' });
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({ msg: 'Unauthorized to access this route' });
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
