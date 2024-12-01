import React, { useContext } from "react";
import { ProfileContext } from "../../App";

const Dashboard = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      <h1 className="text-center text-xl font-semibold m-5">
        {profile.username}'s Dashboard
      </h1>
      <div className="grid grid-flow-row md:grid-cols-3 md:grid-flow-col gap-5 mx-5">
        <div
          id="chat-dash"
          className="px-8 py-6 bg-slate-800 rounded-md md:min-h-[400px]"
        >
          <h2 className="text-center">Rax-Chat</h2>
        </div>
        <div
          id="misc-dash"
          className="px-8 py-6 bg-slate-800 rounded-md md:min-h-[400px]"
        >
          <h2 className="text-center">Hyrax Corporation Bulletein</h2>
        </div>
        <div
          id="profile-dash"
          className="px-8 py-6 bg-slate-800 rounded-md md:min-h-[400px]"
        >
          <h2 className="text-center">View Your Profile</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
