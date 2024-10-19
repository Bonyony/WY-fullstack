import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ProfileContext } from "../../App";

const Profile = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const PORT = 3000 || 3001;

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/profile/:id`);
      setProfile(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      <div
        id="profile-card"
        className="p-4 mt-20 h-screen bg-gray-200 text-black rounded-sm"
      >
        <h2 className="text-xl font-black mb-2">
          Welcome Username, please review our data-banks
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
            <p>Undefined</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Your biography: </p>
            <p>Undefined</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
