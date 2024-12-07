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
    <section className="container max-w-screen-md mx-auto px-4">
      <div id="profile-card" className="py-4 px-8 min-h-[500px] rounded-sm">
        <h2 className="text-xl text-center font-black mb-2">
          Welcome {profile.username}, please review your data-banks
        </h2>
        <div className="flex flex-col justify-center w-auto">
          <UserProfileStats />
          <button className=" my-2 btn btn-error" onClick={signOut}>
            SIGN OUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
