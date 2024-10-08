const express = require("express");

const router = express.Router();

const {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require("../controllers/resumeControlles");

router.post("/create", createResume);
router.get("/getresumes", getResumes);
router.get("/getresume/:resumeId", getResumeById);

module.exports = router;
