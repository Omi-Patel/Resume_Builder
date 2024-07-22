import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Loader from "../loader/Loader";
import "../../../src/App.css"; // Import the CSS file
import { Button } from "@nextui-org/react";

const ResumeReview = () => {
  const [resumeData, setResumeData] = useState();
  const [loading, setLoading] = useState(false);

  const { resumeId } = useParams();
  const token = localStorage.getItem("token");

  const fetchSingleResume = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/resume/getresume/${resumeId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setResumeData(data.resume);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching resume:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleResume();
  }, [resumeId]);

  const downloadPDF = async () => {
    const resumeElement = document.getElementById("resume-content");
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Increase scale for better quality
      useCORS: true, // Allow cross-origin images
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // If the image height is larger than the PDF height, scale down proportionally
    const adjustedImgHeight = imgHeight > pdfHeight ? pdfHeight : imgHeight;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, adjustedImgHeight);
    pdf.save(`${resumeData.personalInfo.name}_Resume.pdf`);
  };

  if (loading) {
    return <Loader size="sm" />;
  }

  if (!resumeData) {
    return <div>No resume data available.</div>;
  }

  const {
    personalInfo = {},
    education = [],
    experience = [],
    projects = [],
    skills = [],
    achievements = [],
  } = resumeData;

  return (
    <>
      <div className="max-w-3xl mx-auto my-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <div id="resume-content">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-gray-600">
              {personalInfo.designation}
            </p>
            <div className="mt-4 flex flex-wrap justify-evenly space-x-4 text-sm sm:text-lg">
              {personalInfo.email && <p>{personalInfo.email}</p>}
              {personalInfo.phone && <p>{personalInfo.phone}</p>}
              {personalInfo.githubUrl && (
                <a
                  target="_blank"
                  href={personalInfo.githubUrl}
                  className="text-blue-500 flex items-center gap-1"
                >
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.linkedinUrl && (
                <a
                  target="_blank"
                  href={personalInfo.linkedinUrl}
                  className="text-blue-500 flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.website && (
                <a
                  target="_blank"
                  href={personalInfo.website}
                  className="text-blue-500 flex gap-1 items-center"
                >
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </div>

          {/* Summary Section */}
          {personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold border-b-2 pb-2 mb-4">
                Summary
              </h2>
              <p className="text-sm sm:text-base">{personalInfo.summary}</p>
            </div>
          )}

          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold border-b-2 pb-2 mb-4">
                Skills
              </h2>
              <ul className="list-disc pl-5 grid grid-cols-2 sm:grid-cols-3 gap-x-4 text-sm sm:text-base">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects Section */}
          {projects.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold border-b-2 pb-2 mb-4">
                Projects
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">{project.title}</p>
                    {project.link && (
                      <a href={project.link} className="text-blue-500">
                        Visit App
                      </a>
                    )}
                  </div>
                  <p className="text-sm sm:text-base">{project.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Experience Section */}
          {experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold border-b-2 pb-2 mb-4">
                Experience
              </h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">{exp.company}</p>
                    <p className="text-sm">
                      {new Date(exp.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}{" "}
                      -{" "}
                      {new Date(exp.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                  <p className="italic text-sm sm:text-base">
                    {exp.description}
                  </p>
                  <p className="text-sm">{exp.responsibilities}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold border-b-2 pb-2 mb-4">
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">{edu.college}</p>
                    <p className="text-sm">
                      {new Date(edu.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}{" "}
                      -{" "}
                      {new Date(edu.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                  <p className="italic text-sm sm:text-base">
                    {edu.qualification}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Section */}
          {achievements.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold border-b-2 pb-2 mb-4">
                Achievements
              </h2>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className=" py-8">
        <Button
          onClick={downloadPDF}
          variant="shadow"
          color="primary"
          className=" text-white font-bold py-2 px-4  flex justify-center items-center mx-auto"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>Download PDF</span>
        </Button>
      </div>
    </>
  );
};

export default ResumeReview;
