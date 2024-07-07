import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const Skills = () => {
  const [skills, setSkills] = useState([""]);
  // const history = useHistory();

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addField = () => {
    setSkills([...skills, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED", skills);
  };

  return (
    <div className="bg-blue-400 h-full">
      <h1 className="bg-red-100 text-3xl text-center font-bold font-mono tracking-tighter">
        Skills.
      </h1>
      <div className=" mt-8 max-w-4xl mx-auto py-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-yellow-300 ">
            {skills.map((skill, index) => (
              <div key={index}>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Skill"
                  value={skill}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="bg-green-500 w-32 py-2 rounded-md"
              onClick={addField}
            >
              Add Skill
            </button>

            <button type="submit">Submin</button>
          </div>
        </form>

        {/* Buttons */}
        <div className="bg-blue-500 mt-14 text-xl font-semibold tracking-wide flex justify-between items-center">
          <button className="bg-yellow-300 px-8 py-3 rounded-lg">
            <div className="flex gap-1 items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
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
          </button>
          <button className="bg-yellow-300 px-6 py-3 rounded-lg">
            <div className="flex gap-1 items-center justify-center">
              <span>Save & Next</span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
