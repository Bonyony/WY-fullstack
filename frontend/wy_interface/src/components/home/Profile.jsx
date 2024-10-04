import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  // dummy setup for now
  useEffect(() => {
    setLoading(true);
    axios
      // server hit THIS SHOULD NOT BE EMPTY
      .get()
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      <div
        id="profile-card"
        className="p-4 bg-yellow-200 text-black rounded-sm"
      >
        <h2 className="text-xl">
          Welcome Username, please review our data-banks
        </h2>
        <p>Time in our system: </p>
        <p>Preffered space-org: </p>
        <p>Your biography: </p>
      </div>
    </div>
  );
};

export default Profile;
