const ResponseResult = (result, res) => {
  if (result.errors.length) {
    res.status(result.status).json(result.errors);
    return;
  }

  res
    .status(result.status)
    .json({ message: result.message, data: result.data });
};

export default ResponseResult;
