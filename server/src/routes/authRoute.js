const express = require("express");

const router = express.Router();

const {
  registerHandle,
  loginHandle,
  profileHandle,
  verifyUser,
} = require("../controllers/authControlles");
const protect = require("../middlewares/authMiddleware");

router.post("/register", registerHandle);

router.post("/login", loginHandle);

router.get("/profile/:userId", protect, profileHandle);

router.post("/verifyuser", verifyUser);

module.exports = router;
