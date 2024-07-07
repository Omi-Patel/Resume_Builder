import React from "react";

const Projects = () => {
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
            />
          </div>
        </div>

        <hr className="mt-8" />

        {/* Higher Secondary */}
        <div className=" mt-4 max-w-4xl mx-auto">
          {/* First Row -> Comp. & Start and End Date */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
            <div className="mt-[16px]">
              {/* <label htmlFor="name">Project Name</label> */}
              <input
                type="text"
                id="project"
                name="project"
                className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Project-1"
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

export default Projects;
