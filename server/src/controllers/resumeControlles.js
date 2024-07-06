const Resume = require("../models/resume");

const createResume = async (req, res) => {
  const personalInfo = {
    name: "DHRUV",
    email: "dpgmail.com",
    phone: "1122334455",
    address: "valoti",
    summary: "Aspiring Software Developer",
    linkedinUrl: "linkedin.com.in/om-patel",
    githubUrl: "github.com/omi-patel",
  };

  const education = [
    {
      degree: "Bachelor's of engineering",
      institution: "SVIT, Vasad",
      startDate: "2021-07-10",
      endDate: "2025-07-31",
      description: "With an excellence score of 9.22 CGPA",
    },
  ];

  const experience = [
    {
      title: "Web Developer Intern",
      company: "Oasis Infobyte",
      startDate: "2023-03-10",
      endDate: "2023-08-10",
      responsibilities: ["HTML", "CSS", "JS", "React"],
    },
  ];

  const projects = [
    {
      title: "Tiffin Service Provider",
      description:
        "Online Tiffin Service made easy to get meal on the home door.",
      technologies: ["React", "Nodejs", "Expressjs", "MongoDB", "NextUI"],
      link: "https://om-patel.info",
    },
  ];

  const skills = ["HTML", "CSS", "JS", "JAVA", "MERN", "Git & GitHub"];

  try {
    const resume = await Resume.create({
      user: "6682fae4e7b618030043c300",
      personalInfo,
      education,
      experience,
      projects,
      skills,
    });

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
    const resume = await Resume.findById(req.params.id);

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
