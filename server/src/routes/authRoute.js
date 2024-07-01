const express = require("express");

const router = express.Router();

const {
  registerHandle,
  loginHandle,
  profileHandle
} = require("../controllers/authControlles");
const  protect  = require("../middlewares/authMiddleware");

router.post("/register", registerHandle);

router.post("/login", loginHandle);

router.get('/profile', protect, profileHandle)

module.exports = router;
