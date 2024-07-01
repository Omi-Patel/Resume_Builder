const express = require("express");

const router = express.Router();

router.get("/resume", (req, res) => {
  res.send("RESUME PAGE");
});

module.exports = router;
