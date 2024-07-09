import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Avatar, Button } from "@nextui-org/react";

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
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
    <div className="min-h-screen max-w-7xl bg-red-200 mx-auto">
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
    </div>
  );
};

export default Profile;
