import React, { useState } from "react";

const Experience = () => {
  const [org1, setOrg1] = useState("");
  const [startDate1, setStartDate1] = useState("");
  const [endDate1, setEndDate1] = useState("");
  const [description1, setDescription1] = useState("");

  const company1 = {
    company: org1,
    startDate: startDate1,
    endDate: endDate1,
    description: description1,
  };

  const [org2, setOrg2] = useState("");
  const [startDate2, setStartDate2] = useState("");
  const [endDate2, setEndDate2] = useState("");
  const [description2, setDescription2] = useState("");

  const company2 = {
    company: org2,
    startDate: startDate2,
    endDate: endDate2,
    description: description2,
  };

  const [allExperience, setAllExperience] = useState([]);

  const handleSubmit = (index, e) => {
    const newExperience = [];
    newExperience.push(company1);
    newExperience.push(company2);
    setAllExperience(newExperience);
  };
  // console.log("Submitted", allExperience);

  return (
    <div className=" h-full">
      <h1 className="bg-red-100 text-3xl text-center font-bold font-mono tracking-tighter">
        Experience
      </h1>

      {/* Input Fields */}
      <div className=" mt-8 max-w-4xl mx-auto">
        {/* First Row -> Company. & Start and End Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
          <div className="mt-[18px]">
            {/* <label htmlFor="name">Company Name</label> */}
            <input
              type="text"
              id="company"
              name="company"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Organization / StartUp"
              value={org1}
              onChange={(e) => setOrg1(e.target.value)}
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

        {/* Higher Secondary */}
        <div className=" mt-6 max-w-4xl mx-auto">
          {/* First Row -> Comp. & Start and End Date */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
            <div className="mt-[18px]">
              {/* <label htmlFor="name">Company Name</label> */}
              <input
                type="text"
                id="company"
                name="company"
                className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Organization / StartUp"
                value={org2}
                onChange={(e) => setOrg2(e.target.value)}
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
          <button
            onClick={handleSubmit}
            className="bg-yellow-300 px-6 py-3 rounded-lg"
          >
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

export default Experience;
