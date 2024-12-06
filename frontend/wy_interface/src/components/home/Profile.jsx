import React, { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../../App";
import { useNavigate } from "react-router-dom";
import UserProfileStats from "./socketIO/UserProfileStats";

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
    <section className="container max-w-screen-lg mx-auto px-4">
      <div id="profile-card" className="py-4 px-8 h-screen rounded-sm">
        <h2 className="text-xl font-black mb-2">
          Welcome {profile.username}, please review our data-banks
        </h2>
        <UserProfileStats />
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
          <button className=" my-2 btn btn-error" onClick={signOut}>
            SIGN OUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
