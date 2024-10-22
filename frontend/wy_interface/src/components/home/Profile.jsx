import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
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
        className="p-4 mt-20 h-screen bg-gray-200 text-black rounded-sm"
      >
        <h2 className="text-xl font-black mb-2">
          Welcome {profile.username}, please review our data-banks
        </h2>
        {/* this will be for a profile picture? maybe. Maybe not an upload, but one that I will supply */}
        <div className="flex flex-row justify-center m-2 ">
          <div className="h-16 w-16 bg-emerald-900 rounded-full"></div>
        </div>
        <div className="p-2 uppercase flex flex-col gap-4 text-white bg-emerald-900 rounded-md">
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
            className="px-2 py-1 my-2 bg-rose-700 hover:bg-red-600 text-white font-light text-sm rounded-md "
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
