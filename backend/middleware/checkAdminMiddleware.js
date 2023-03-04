const checkAdminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(401).json({ msg: 'Not Authorized' });
  }
  next();
};

module.exports = checkAdminMiddleware;
