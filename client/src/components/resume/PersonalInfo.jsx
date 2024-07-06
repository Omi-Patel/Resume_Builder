import React from "react";

const PersonalInfo = () => {
  return (
    <div className="bg-blue-400 h-full">
      <h1 className="bg-red-100 text-3xl text-center font-bold font-mono tracking-tighter">
        Personal INFO.
      </h1>

      {/* Input Fields */}
      <div className=" mt-8 max-w-4xl mx-auto">
        {/* First Row - Name & Email */}
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>

          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>
        </div>

        {/* Second Row - Mobile & Adderess */}

        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Mobile No."
            />
          </div>

          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Address"
            />
          </div>
        </div>

        {/* Third Row - Social Links */}
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="LinkedIn URL"
            />
          </div>

          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="github"
              name="github"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="GitHub URL"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <textarea
              rows={5}
              type="text"
              id="summary"
              name="summary"
              className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
              placeholder="Summary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
