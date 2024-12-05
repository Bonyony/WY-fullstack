import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../App";

const Dashboard = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      <h1 className="text-center text-3xl  font-black m-5">
        {profile.username}'s Dashboard
      </h1>
      <div className="grid grid-flow-row md:grid-cols-3 md:grid-flow-col gap-5 mx-5">
        {/* Chat box */}
        <div
          id="chat-dash"
          className="flex flex-col justify-between items-center px-1 py-6 bg-base-200 outline outline-neutral card md:min-h-[400px]"
        >
          <h2 className="text-center text-xl font-semibold">Rax-Chat</h2>
          <div className="card-body">
            <p>
              Join a fun chat room to speak with other people! Doesn't that
              sound like fun? NO!? Then just wait here for Frank to add more
              features...
            </p>
          </div>
          <Link className="btn btn-primary max-w-[200px]" to="/home/chatselect">
            Chat Now!
          </Link>
        </div>

        {/* Main dash */}
        <div
          id="misc-dash"
          className="flex flex-col justify-between items-center px-1 py-6 bg-base-200 outline outline-neutral card md:min-h-[400px]"
        >
          <h2 className="text-center text-xl font-semibold">
            Hyrax Corporation Bulletin
          </h2>
          <div className="card-body">
            <p>Employees of the Year</p>
            <img
              src="/public/Hyrax-6891.jpg"
              alt="Employees of the Year, (Linda, Johnny, Fran, Zurple, Billy, and Mango)"
              className="border-2 rounded-md border-white"
            />
          </div>
          <Link className="btn btn-primary max-w-[200px]" to="/home/alien">
            Something Different
          </Link>
        </div>

        {/* Profile dash */}
        <div
          id="profile-dash"
          className="flex flex-col justify-between items-center px-1 py-6 bg-base-200 outline outline-neutral card md:min-h-[400px]"
        >
          <h2 className="text-center text-xl font-semibold">
            View Your Profile
          </h2>
          <div className="card-body">
            <p>
              View your very own profile! Data and numbers and things. Oh and
              your personal biography! Very quaint.
            </p>
            <p className="font-semibold">
              Profile features on the way:
              <ul className=" list-disc list-inside">
                <li>Profile pictures!</li>
                <li>View other user's profiles!</li>
                <li>Delete your profile!</li>
              </ul>
            </p>
          </div>
          <Link className="btn btn-primary max-w-[200px]" to="/home/profile">
            Profile Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
