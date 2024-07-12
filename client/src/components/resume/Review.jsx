import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Loader from "../loader/Loader";
import "../../../src/App.css"; // Import the CSS file

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

  // Download PDF fn
  const downloadPDF = async () => {
    const resumeElement = document.getElementById("resume-content");
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Increase scale for better quality
      useCORS: true, // Allow cross-origin images
    });

    const imgData = canvas.toDataURL("image/png");
    // "p", "mm", "a4"
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
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
      <div className="max-w-3xl mx-auto my-8 p-4 sm:p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <div id="resume-content">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-gray-600">
              {personalInfo.designation}
            </p>
            <div className="mt-4 flex flex-wrap justify-center space-x-4 text-sm sm:text-lg">
              {personalInfo.email && <p>{personalInfo.email}</p>}
              {personalInfo.phone && <p>{personalInfo.phone}</p>}
              {personalInfo.githubUrl && (
                <a
                  href={personalInfo.githubUrl}
                  className="text-blue-500 flex items-center gap-1"
                >
                  <span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path d="M12 0.296c-6.627 0-12 5.373-12 12 0 5.301 3.438 9.8 8.205 11.387.6.111.82-.261.82-.578 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.834 2.809 1.304 3.492.997.107-.774.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.526.118-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.398 3.004-.402 1.02.004 2.047.136 3.006.402 2.292-1.552 3.297-1.23 3.297-1.23.657 1.65.244 2.873.121 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.623-5.475 5.921.43.37.815 1.096.815 2.207 0 1.594-.015 2.878-.015 3.269 0 .319.216.694.825.577 4.765-1.587 8.197-6.086 8.197-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.linkedinUrl && (
                <a
                  href={personalInfo.linkedinUrl}
                  className="text-blue-500 flex items-center gap-1"
                >
                  <span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.46C0 23.208.792 24 1.77 24h20.46c.978 0 1.77-.792 1.77-1.77V1.77C24 .792 23.208 0 22.23 0zM7.12 20.452H3.69V8.905h3.43v11.547zM5.405 7.421c-1.1 0-1.985-.885-1.985-1.984a1.984 1.984 0 1 1 3.97 0c0 1.099-.885 1.984-1.985 1.984zm14.724 13.031h-3.428v-5.652c0-1.347-.027-3.08-1.877-3.08-1.877 0-2.165 1.465-2.165 2.977v5.755h-3.43V8.905h3.29v1.566h.046c.459-.868 1.577-1.785 3.246-1.785 3.467 0 4.105 2.282 4.105 5.249v6.517z" />
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.website && (
                <a
                  href={personalInfo.website}
                  className="text-blue-500 flex gap-1 items-center"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </span>
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

      <button
        onClick={downloadPDF}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </button>
    </>
  );
};

export default ResumeReview;
