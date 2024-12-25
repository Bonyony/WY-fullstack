import React, { useContext, useState } from "react";
import { ProfileContext } from "../../../App";
import axios from "axios";
import { bioRequest } from "../../../utils/apiUtils";

const UserProfileStats = () => {
  const [updating, setUpdating] = useState(false);
  const [input, setInput] = useState({});
  const { profile, setProfile } = useContext(ProfileContext);
  console.log(profile);

  const updateBio = () => {
    // yum yum yum
    // set updating to true

    // when done set updating to false
    setUpdating(!updating);
  };

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
        <div className="stat-value text-primary">25.6K</div>
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
          {/* Put a button here to edit the bio.
            It will:
            1. Open an input box
            2. Be able to send the details
            It should have:
            1. some sort of PUT or PATCH request
            2. feedback for length of bio (< 500)
            3. A nice look to it
            4. setProfile as new Profile object
        */}
          <button onClick={updateBio}>
            {updating ? "Update Bio" : "Edit Bio"}
          </button>
        </div>
        <div className="stat-title">Biography</div>
        {!updating && (
          <div className=" text-secondary">
            {
              // This ternary is to ensure that all profiles have default text
              // In production there should be no null bios
              profile.biography == null
                ? "This user hasn't added a biography yet."
                : profile.biography
            }
          </div>
        )}
        {updating && (
          <textarea
            className="textarea textarea-bordered mt-1"
            placeholder="Maybe have old bio be placeholder?"
          ></textarea>
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

        {profile.roles.map((role) => (
          <div className="stat-value text-base">{role.split("ROLE_")}</div>
        ))}

        <div className="stat-desc text-secondary">
          {profile.roles.length === 3 ? "Full Access!" : "Standard Access"}
        </div>
      </div>
    </div>
  );
};

export default UserProfileStats;
