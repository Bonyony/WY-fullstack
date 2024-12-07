import React from "react";

const UserProfileStats = () => {
  return (
    <div className="stats stats-vertical shadow">
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
        </div>
        <div className="stat-title">Time as a Member</div>
        <div className="stat-value text-secondary">2 Days</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="/icons8-alien-64.png" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
};

export default UserProfileStats;
