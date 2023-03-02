const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(400).json({ msg: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { userId, email } = decoded;

    req.user = { userId, email };

    next();
  } catch (error) {
    res.status(400).json({ msg: 'Not authorized to access this route' });
  }
};

module.exports = authenticationMiddleware;
