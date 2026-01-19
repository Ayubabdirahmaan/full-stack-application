export const errorHandler = (err, req, res, next) => {
  console.log("error", err);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Something went wrong',
    status
  });
};