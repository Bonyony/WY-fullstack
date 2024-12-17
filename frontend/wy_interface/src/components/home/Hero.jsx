import React from "react";

const Hero = ({ profile }) => {
  return (
    <div
      className="hero min-h-screen mb-5"
      style={{
        backgroundImage: "url(/Hyrax-6891.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="orbitron mb-5 text-5xl font-bold">
            Hello there {profile.username}
          </h1>
          <p className="mb-5">
            Thank you for visiting! Feel free to chat, relax and have a good
            time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
