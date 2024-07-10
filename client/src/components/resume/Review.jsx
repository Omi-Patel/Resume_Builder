// src/components/ResumeReview.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const ResumeReview = () => {
  const [resume, setResume] = useState();
  const [loading, setLoading] = useState(false);

  const { resumeId } = useParams();
  const token = localStorage.getItem("token");

  const fetchSingleResume = async () => {
    setLoading(true);
    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/resume/getresume/${resumeId}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const response = await blob.json();
      setResume(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    fetchSingleResume();

  }, []);


  return (
    <>
      {loading ? (
        <Loader size={"sm"} />
      ) : (
        <div className="max-w-3xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg border border-gray-300">
          {/* Header Section */}
          {/* <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">{resume.personalInfo.name}</h1>
            <div className="mt-2  flex flex-wrap justify-center space-x-4">
              <p className="text-lg ">{resume.personalInfo.email}</p>
              <p className="text-lg">{resume.personalInfo.phone}</p>
              <a href={resume.personalInfo.github} className="text-blue-500">
                github.com/omipatel
              </a>
              <a href={resume.personalInfo.linkedin} className="text-blue-500">
                linkedin.co.in/ompatel
              </a>
              <a href={resume.personalInfo.website} className="text-blue-500">
                ompate.info
              </a>
            </div>
          </div> */}

          {/* Summary Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Summary
            </h2>
            <p>{personalInfo.summary}</p>
          </div> */}

          {/* Skills Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Skills
            </h2>
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index} className="text-lg">
                  {skill}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Projects Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Projects
            </h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{project.title}</p>
                <p>{project.description}</p>
                <a href={project.link} className="text-blue-500">
                  {project.link}
                </a>
              </div>
            ))}
          </div> */}

          {/* Experience Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{exp.company}</p>
                <p className="italic">{exp.position}</p>
                <p className="text-sm">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-sm">{exp.responsibilities}</p>
              </div>
            ))}
          </div> */}

          {/* Education Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{edu.institution}</p>
                <p className="italic">{edu.degree}</p>
                <p className="text-sm">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div> */}

          {/* Achievements Section */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Achievements
            </h2>
            <ul className="list-disc pl-5">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      )}
    </>
  );
};

export default ResumeReview;
