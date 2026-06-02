const express = require("express");

const {
  getHealthStatus,
  testPostRequest,
} = require("../controllers/healthController");

const router = express.Router();

router.get("/health", getHealthStatus);
router.post("/test", testPostRequest);

module.exports = router;
