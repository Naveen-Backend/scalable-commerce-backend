const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/userController");

const { getProfile } = require("../controllers/profileController");

router.get("/", authMiddleware, getUsers);
router.get("/profile", authMiddleware, getProfile);
router.post("/", createUser);
router.post("/login", loginUser);

module.exports = router;
