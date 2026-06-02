const getHealthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is Healthy...",
  });
};

const testPostRequest = (req, res) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "Data Received Successfully",
    data: req.body,
  });
};

module.exports = {
  getHealthStatus,
  testPostRequest,
};
