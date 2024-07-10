const mongoose = require("mongoose");

const { Schema } = mongoose;

// Sub-schemas
const educationSchema = new Schema({
  qualification: String,
  college: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const experienceSchema = new Schema({
  company: String,
  description: String,
  startDate: Date,
  endDate: Date,
});

const projectSchema = new Schema({
  title: String,
  description: String,
  link: String,
});

// Main resume schema
const resumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    address: String,
    summary: String,
    linkedinUrl: String,
    githubUrl: String,
  },
  education: [educationSchema],
  experience: [experienceSchema],
  projects: [projectSchema],
  skills: [String], // Assuming skills are represented as strings
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
