import React, { useContext, useState } from "react";
import { ProfileContext } from "../../../App";
import { bioRequest } from "../../../utils/apiUtils";

const UserProfileStats = () => {
  const [updating, setUpdating] = useState(false);
  const [input, setInput] = useState({});
  const { profile, setProfile } = useContext(ProfileContext);

  // console.log(profile);
  // console.log(profile.roles);
  // editing the bio now causes roles to appear as the coded verison
  // need to fix the auth system

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const formAction = async (e) => {
    e.preventDefault();
    const payload = { ...input, username: profile.username };
    try {
      const userData = await bioRequest(payload);
      console.log(userData);
      setProfile(userData);
      setUpdating(false);
    } catch (err) {
      console.log(err);
    }
  };

  const isBioValid = input.biography && input.biography.length <= 500;

  const formatRole = (role) => role.toUpperCase().split("ROLE_");

  return (
    <div className="stats stats-vertical shadow">
      {/* Messages Sent */}
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 25 25"
            fill="lightgreen"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16109 12.9424L2.91109 12.4324C2.42109 12.3124 2.35109 11.6724 2.80109 11.4624L20.7111 3.55243C21.1811 3.34243 21.6711 3.81243 21.4411 4.25243L13.0111 21.2124C12.7811 21.6424 12.1211 21.5724 12.0011 21.1124L11.1711 13.2124L18.4411 6.41243"
              stroke="#0F0F0F"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="stat-title">Messages Sent</div>
        <div className="stat-value text-primary">25.6K Not done yet</div>
      </div>
      {/* User Bio */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <button className="" onClick={() => setUpdating(!updating)}>
            {updating ? "Cancel" : "Edit Bio"}
          </button>
        </div>
        <label for="biography" className="stat-title">
          Biography
        </label>
        {!updating && (
          <div className=" text-secondary">{profile.biography}</div>
        )}
        {updating && (
          <form className="" onSubmit={formAction}>
            <textarea
              id="biography"
              name="biography"
              value={input.biography || ""}
              className="textarea textarea-bordered mt-1 w-full"
              placeholder="Enter a new biography."
              maxLength={500}
              onChange={handleChange}
            ></textarea>
            <button
              className="btn btn-primary btn-xs mt-2"
              type="submit"
              disabled={!isBioValid}
            >
              Submit
            </button>
            {!isBioValid && (
              <p className="text-error text-xs mt-2">
                Biography must be less than 500 characters.
              </p>
            )}
          </form>
        )}
      </div>
      {/* Clearance Levels */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar">
            <div className="w-auto rounded-full">
              <img src="/icons8-alien-64.png" />
            </div>
          </div>
        </div>
        <div className="stat-title">Clearance Levels</div>

        {profile.roles.map((role, index) => (
          <div key={index} className="stat-value text-base">
            {formatRole(role)}
          </div>
        ))}

        <div className="stat-desc text-secondary">
          {profile.roles.length === 3 ? "Full Access!" : "Standard Access"}
        </div>
      </div>
    </div>
  );
};

export default UserProfileStats;
