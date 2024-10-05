import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  // All of this may be moved to a global context later, this will be for testing!
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/:id");
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
