const errorHandler = (err, req, res, next) => {
  return res
    .status(500)
    .json({ msg: Object.keys(err).length ? err : 'Something went wrong' });
};

module.exports = errorHandler;
