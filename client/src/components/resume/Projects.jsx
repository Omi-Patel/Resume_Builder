import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [title1, setTitle1] = useState("");
  const [description1, setDescription1] = useState("");
  const [link1, setLink1] = useState("");

  const navigate = useNavigate();

  const project1 = {
    title: title1,
    description: description1,
    link: link1,
  };

  const [title2, setTitle2] = useState("");
  const [description2, setDescription2] = useState("");
  const [link2, setLink2] = useState("");

  const project2 = {
    title: title2,
    description: description2,
    link: link2,
  };

  const [allProjects, setAllProjects] = useState([]);

  const handleSubmit = (index, e) => {
    const newProject = [];
    newProject.push(project1);
    newProject.push(project2);
    setAllProjects(newProject);
    localStorage.setItem("projects", JSON.stringify(newProject));
  };
  // console.log(allProjects);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // localStorage.setItem("projects", JSON.stringify(projects));
  //   console.log("SUBMITTED", allProjects);
  // };

  return (
    <div className=" h-full">
      <h1 className="bg-red-100 text-3xl text-center font-bold font-mono tracking-tighter">
        Projects
      </h1>

      {/* Input Fields */}
      <div className=" mt-8 max-w-4xl mx-auto">
        {/* First Row -> Project Name. & URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
          <div className="mt-[16px]">
            {/* <label htmlFor="name">Project Name</label> */}
            <input
              type="text"
              id="project"
              name="project"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Project-1"
              value={title1}
              onChange={(e) => setTitle1(e.target.value)}
            />
          </div>

          <div className="sm:mt-6 mt-4">
            {/* <label htmlFor="url" className="font-semibold tracking-wide">
              Project URL
            </label> */}
            <input
              type="text"
              id="url"
              name="urls"
              placeholder="Project URL"
              className="block w-full px-4 py-3  text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={link1}
              onChange={(e) => setLink1(e.target.value)}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-6">
          <div>
            {/* <label htmlFor="name">Description</label> */}
            <textarea
              rows={3}
              type="text"
              id="description"
              name="description"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
              placeholder="Description"
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
            />
          </div>
        </div>

        <hr className="mt-8" />

        {/* Second Project */}
        <div className=" mt-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
            <div className="mt-[16px]">
              {/* <label htmlFor="name">Project Name</label> */}
              <input
                type="text"
                id="project"
                name="project"
                className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Project-2"
                value={title2}
                onChange={(e) => setTitle2(e.target.value)}
              />
            </div>

            <div className="sm:mt-6 mt-4">
              {/* <label htmlFor="url" className="font-semibold tracking-wide">
                Project URL
              </label> */}
              <input
                type="text"
                id="url"
                name="urls"
                placeholder="Project URL"
                className="block w-full px-4 py-3  text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={link2}
                onChange={(e) => setLink2(e.target.value)}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-6">
            <div>
              {/* <label htmlFor="name">Description</label> */}
              <textarea
                rows={3}
                type="text"
                id="description"
                name="description"
                className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                placeholder="Description"
                value={description2}
                onChange={(e) => setDescription2(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 text-xl font-semibold tracking-wide flex justify-between items-center">
          <Button
            radius="full"
            onClick={() => navigate("/create-resume/experience")}
            className="px-5"
          >
            <div className="flex gap-1 items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>Back</span>
            </div>
          </Button>
          <Button
          color="primary"
          radius="full"
            onClick={() => {
              handleSubmit(), navigate("/create-resume/skills");
            }}
            className="p-5"
          >
            <div className="flex gap-1 items-center justify-center">
              <span>Save & Next</span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
