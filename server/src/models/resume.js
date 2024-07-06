const mongoose = require("mongoose");

const { Schema } = mongoose;

// Sub-schemas
const educationSchema = new Schema({
  degree: String,
  institution: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const experienceSchema = new Schema({
  title: String,
  company: String,
  startDate: Date,
  endDate: Date,
  responsibilities: [String],
});

const projectSchema = new Schema({
  title: String,
  description: String,
  technologies: [String],
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
