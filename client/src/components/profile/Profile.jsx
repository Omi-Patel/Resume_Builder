import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Avatar, Button } from "@nextui-org/react";

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
  const [resume, setResume] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchUser = async () => {
    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/user/profile/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const response = await blob.json();

      setProfile(response.user);
      setResume(response.user.resumes);
      setLoading(false);
      // console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="min-h-screen max-w-7xl  mx-auto">
      {/* Profile Info */}
      <div className=" flex flex-col sm:flex-row justify-between items-center">
        <div className="flex m-6  sm:flex-row gap-4  sm:p-4  items-center">
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className=""
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">
              Welcome, {profile.name} 👋
            </h1>

            <h2 className="flex items-center  gap-1 text-medium">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </span>
              <span className="">{profile.email}</span>
            </h2>
          </div>
        </div>
      </div>

      {resume.length > 0 ? (
        <div className=" p-4 px-6">
          <h1 className="text-xl sm:text-2xl font-medium">All Resumes..</h1>
        </div>
      ) : (
        ""
      )}
      {resume.length > 0 ? (
        <div className="  grid sm:grid-cols-3">
          {resume.map((res) => {
            return (
              <div className=" " key={res._id}>
                <div className="p-4 ">
                  <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-6 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-2">
                      {res.personalInfo.name}
                    </h1>
                    <h2 className="tracking-widest text-medium title-font font-medium text-gray-600 mb-2">
                      {res.personalInfo.designation}
                    </h2>
                    <p className="text-gray-500 text-justify text-sm my-3">
                      {res.personalInfo.summary}
                    </p>

                    <div className="flex justify-between text-center mt-2 leading-none absolute bottom-0 left-0 w-full p-4">
                      <div>
                        <Button
                          variant="flat"
                          color="secondary"
                          className="font-medium px-0"
                        >
                          <NavLink
                            to={`/review/${res._id}`}
                            className=" flex gap-1 p-3"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-5"
                              >
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path
                                  fillRule="evenodd"
                                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>View</span>
                          </NavLink>
                        </Button>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-blue-500 cursor-pointer"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-red-500 cursor-pointer"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" p-4 px-10">
          <h1 className="text-xl font-medium">No Resumes Found..!</h1>
          <Button variant="flat" color="primary" className="px-0 mt-4">
            <NavLink
              to={"/create-resume"}
              className=" flex p-3 gap-1 font-medium"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>Create New One!</span>
            </NavLink>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
