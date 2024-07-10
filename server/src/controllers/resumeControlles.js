const Resume = require("../models/resume");
const User = require("../models/user");

const createResume = async (req, res) => {
  // console.log(req.body);
  const userId = req.user._id;

  const { personalInfo, education, experience, projects, skills } = req.body;

  try {
    const resume = await Resume.create({
      user: userId,
      personalInfo,
      education,
      experience,
      projects,
      skills,
    });

    const existUser = await User.findById({ _id: userId });
    existUser.resumes.push(resume._id);

    await existUser.save();

    return res
      .status(201)
      .json({ success: "Resume created successfully", resume });
  } catch (error) {
    return res.status(500).json({ error: "Server Error", error });
  }
};

const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();

    return res.status(200).json({ resumes });
  } catch (error) {
    return res.status(500).json({ error: "Server Error", error });
  }
};

const getResumeById = async (req, res) => {
  try {
    const {resumeId} = req.params;
    const resume = await Resume.findById({_id : resumeId});

    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(500).json({ error: "Server Error", error });
  }
};

const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    return res
      .status(200)
      .json({ success: "Resume updated successfully", resume });
  } catch (error) {
    return res.status(500).json({ error: "Server Error", error });
  }
};

const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);

    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    return res.status(200).json({ success: "Resume deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Server Error", error });
  }
};

module.exports = {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
