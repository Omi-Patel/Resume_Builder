import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const [college1, setCollege1] = useState("");
  const [startDate1, setStartDate1] = useState("");
  const [endDate1, setEndDate1] = useState("");
  const [qualification1, setQualification1] = useState("");

  const navigate = useNavigate();

  const education1 = {
    college: college1,
    startDate: startDate1,
    endDate: endDate1,
    qualification: qualification1,
  };

  const [college2, setCollege2] = useState("");
  const [startDate2, setStartDate2] = useState("");
  const [endDate2, setEndDate2] = useState("");
  const [qualification2, setQualification2] = useState("");

  const education2 = {
    college: college2,
    startDate: startDate2,
    endDate: endDate2,
    qualification: qualification2,
  };

  const [allEducations, setAllEducations] = useState([]);

  const handleSubmit = (index, e) => {
    const newEducation = [];
    newEducation.push(education1);
    newEducation.push(education2);
    setAllEducations(newEducation);
    localStorage.setItem("education", JSON.stringify(newEducation));
  };
  // console.log("Submitted", allEducations);

  return (
    <div className=" h-full">
      <h1 className="bg-black/5 text-3xl p-2 rounded-lg text-center font-bold font-mono tracking-tighter">
        Educations
      </h1>

      {/* Input Fields */}
      <div className=" mt-8 max-w-4xl mx-auto">
        {/* First Row -> Uni. & Start and End Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
          <div className="mt-[18px]">
            {/* <label htmlFor="name">Qualification Name</label> */}
            <input
              type="text"
              id="uni"
              name="university"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Qualificaton / eg. Bachelors of Engineering"
              value={college1}
              onChange={(e) => setCollege1(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <label htmlFor="start" className="font-semibold tracking-wide">
                Start Date
              </label>
              <input
                type="date"
                id="start"
                name="start"
                className="block w-full px-2 py-3  text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={startDate1}
                onChange={(e) => setStartDate1(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="end" className="font-semibold tracking-wide">
                End Date
              </label>
              <input
                type="date"
                id="end"
                name="end"
                className="block w-full px-4 py-3  text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={endDate1}
                onChange={(e) => setEndDate1(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-6">
          <div className="">
            {/* <label htmlFor="name">University Name</label> */}
            <input
              type="text"
              id="qualification"
              name="qualification"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="eg. From ABC Uni./Inst. with x CGPA"
              value={qualification1}
              onChange={(e) => setQualification1(e.target.value)}
            />
          </div>
        </div>

        <hr className="mt-12" />

        {/* Higher Secondary */}
        <div className=" mt-8 max-w-4xl mx-auto">
          {/* First Row -> Uni. & Start and End Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
            <div className="mt-[18px]">
              {/* <label htmlFor="name">School Name</label> */}
              <input
                type="text"
                id="school"
                name="school"
                className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="12th Standard"
                value={college2}
                onChange={(e) => setCollege2(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <label htmlFor="start" className="font-semibold tracking-wide">
                  Start Date
                </label>
                <input
                  type="date"
                  id="start"
                  name="start"
                  className="block w-full px-2 py-3  text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={startDate2}
                  onChange={(e) => setStartDate2(e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="end" className="font-semibold tracking-wide">
                  End Date
                </label>
                <input
                  type="date"
                  id="end"
                  name="end"
                  className="block w-full px-4 py-3  text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={endDate2}
                  onChange={(e) => setEndDate2(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-6">
            <div className="">
              {/* <label htmlFor="name">University Name</label> */}
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="eg. From ABC School with x %"
                value={qualification2}
                onChange={(e) => setQualification2(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className=" mt-14 text-xl font-semibold tracking-wide flex justify-between items-center">
          <Button
            radius="full"
            onClick={() => navigate("/create-resume/personal-info")}
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
            radius="full"
            color="primary"
            onClick={() => {
              handleSubmit(), navigate("/create-resume/experience");
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

export default Education;
