const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {
  getUser,
  createUser,
  loginUser,
} = require("../controllers/userController");

router.get("/", authMiddleware, getUser);
router.post("/", createUser);
router.post("/login", loginUser);

module.exports = router;
