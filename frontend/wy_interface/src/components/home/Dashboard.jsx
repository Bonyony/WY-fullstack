import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../App";

const Dashboard = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      <h1 className="text-center text-xl font-black m-5">
        {profile.username}'s Dashboard
      </h1>
      <div className="grid grid-flow-row md:grid-cols-3 md:grid-flow-col gap-5 mx-5">
        <div
          id="chat-dash"
          className="flex flex-col justify-between items-center px-8 py-6 bg-slate-800 rounded-md md:min-h-[400px]"
        >
          <h2 className="text-center text-lg font-semibold">Rax-Chat</h2>
          <p>
            Join a fun chat room to speak with other people! Doesn't that sound
            like fun? NO!? Then just wait here for Frank to add more features...
          </p>
          <Link
            className="px-2 py-1 bg-slate-600 rounded-md hover:bg-slate-500 max-w-[200px]"
            to="/home/chatselect"
          >
            Chat Now!
          </Link>
        </div>
        <div
          id="misc-dash"
          className="flex flex-col justify-between items-center px-8 py-6 bg-slate-800 rounded-md md:min-h-[400px]"
        >
          <h2 className="text-center text-lg font-semibold">
            Hyrax Corporation Bulletin
          </h2>
          <p>Employees of the Year</p>
          <img
            src="/public/Hyrax-6891.jpg"
            alt="Employees of the Year, (Linda, Johnny, Fran, Zurple, Billy, and Mango)"
          />
          <Link
            className="px-2 py-1 bg-slate-600 rounded-md hover:bg-slate-500 max-w-[200px]"
            to="/home/alien"
          >
            Something Different
          </Link>
        </div>
        <div
          id="profile-dash"
          className="flex flex-col justify-between items-center px-8 py-6 bg-slate-800 rounded-md md:min-h-[400px]"
        >
          <h2 className="text-center text-lg font-semibold">
            View Your Profile
          </h2>
          <p>
            View your very own profile! Data and numbers and things. Oh and your
            personal biography! Very quaint.
          </p>
          <Link
            className="px-2 py-1 bg-slate-600 rounded-md hover:bg-slate-500 max-w-[200px]"
            to="/home/profile"
          >
            Profile Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
