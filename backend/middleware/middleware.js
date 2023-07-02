const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.MERN_DEPLOYMENT == "development" ? err.stack : null,
  });
};

module.exports = {
  errorHandler,
};
