const express = require("express");

const router = express.Router();

const {
  registerHandle,
  loginHandle,
} = require("../controllers/authControlles");

// POST /auth/register
router.post("/register", registerHandle);

// POST /auth/login
router.post("/login", loginHandle);

module.exports = router;
