import React, { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  console.log(profile);
  const signOut = () => {
    setProfile(null);
    navigate("/");
    console.log(profile);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      <div
        id="profile-card"
        className="p-4 h-screen bg-slate-800 text-white rounded-sm"
      >
        <h2 className="text-xl font-black mb-2">
          Welcome {profile.username}, please review our data-banks
        </h2>
        {/* this will be for a profile picture? maybe. Maybe not an upload, but one that I will supply */}
        <div className="flex flex-row justify-center m-2 ">
          <div className="h-16 w-16 bg-slate-900 rounded-full"></div>
        </div>
        <div className="p-2 uppercase flex flex-col gap-4 text-white bg-slate-900 rounded-md">
          <div className="flex flex-row justify-between">
            <p>Time in our system: </p>
            <p>Undefined</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Preffered space-org: </p>
            <p>The Hyrax Consulate</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Your biography: </p>
            <p>Undefined</p>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <button
            className="px-2 py-1 my-2 bg-red-900 hover:bg-red-800 text-white font-light text-sm rounded-md "
            onClick={signOut}
          >
            SIGN OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
