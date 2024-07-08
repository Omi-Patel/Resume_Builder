import React, { useState } from "react";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (index, e) => {
    const personalInfo = {
      name: name,
      email: email,
      phone: mobile,
      address: address,
      summary: summary,
      linkedinUrl: linkedin,
      githubUrl: github,
    };
    // console.log("Submitted", personalInfo);
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  };

  return (
    <div className=" h-full">
      <h1 className="bg-red-100 text-3xl text-center font-bold font-mono tracking-tighter">
        Personal INFO.
      </h1>

      {/* Input Fields */}
      <div className=" mt-8 max-w-4xl mx-auto">
        {/* First Row - Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-4">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Second Row - Mobile & Adderess */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-2 sm:mt-4">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        {/* Third Row - Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-16 mt-2 sm:mt-4">
          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="LinkedIn URL"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>

          <div>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              id="github"
              name="github"
              className="block w-full px-4 py-3 mt-2 text-base text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="GitHub URL"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
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
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
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

export default PersonalInfo;
