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
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle">
      Profile
    </div>
  );
};

export default Profile;
