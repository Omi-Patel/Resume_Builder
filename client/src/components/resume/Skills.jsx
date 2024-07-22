import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import { useHistory } from "react-router-dom";

const Skills = () => {
  const [skills, setSkills] = useState([""]);
  // const history = useHistory();

  const navigate = useNavigate();

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addField = () => {
    setSkills([...skills, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    const education = JSON.parse(localStorage.getItem("education"));
    const experience = JSON.parse(localStorage.getItem("experience"));
    const projects = JSON.parse(localStorage.getItem("projects"));

    // API Call

    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/resume/create`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            personalInfo,
            education,
            experience,
            projects,
            skills,
          }),
        }
      );

      const response = await blob.json();
      // console.log(response);

      if (response.success) {
        toast.success(response.success);
        navigate(`/review/${response.resume._id}`);
      } else {
        toast.error(response.error);
      }

      // end of fetch
    } catch (error) {
      console.log("ERR", error);
    }
  };

  return (
    <div className=" h-full">
      <h1 className="bg-red-100 text-3xl text-center font-bold font-mono tracking-tighter">
        Skills.
      </h1>
      <div className=" mt-8 max-w-4xl mx-auto py-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
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
          <div className="mt-10 flex justify-between">
            <Button
              variant="flat"
              color="primary"
              type="button"
              className="font-medium  flex justify-center items-center gap-1"
              onClick={addField}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span> Add Skill</span>
            </Button>

            <Button
              type="submit"
              variant="shadow"
              color="success"
              className="font-medium text-white flex justify-center items-center gap-1"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span>Submit & Review</span>
            </Button>
          </div>
        </form>

        {/* Buttons */}
        <div className="mt-14 text-xl font-semibold tracking-wide flex justify-between items-center">
          <Button
            radius="full"
            onClick={() => navigate("/create-resume/projects")}
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
