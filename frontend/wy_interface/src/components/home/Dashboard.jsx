import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../App";

const Dashboard = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      <section className="container max-w-screen-lg mx-auto px-4">
        <h1 className="text-center text-3xl  font-black m-5">
          {profile.username}'s Dashboard
        </h1>
        <div className="grid grid-flow-row md:grid-cols-2 md:grid-flow-col gap-5 mx-5">
          {/* Chat box */}
          <div
            id="chat-dash"
            className="flex flex-col justify-between items-center py-6 outline outline-neutral card md:min-h-[400px]"
          >
            <h2 className="text-center text-xl font-semibold">Rax-Chat</h2>
            <div className="card-body">
              <p>
                Join a fun chat room to speak with other people! Doesn't that
                sound like fun? NO!? Then just wait here for Frank to add more
                features...
              </p>
            </div>
            <Link
              className="btn btn-primary max-w-[200px]"
              to="/home/chatselect"
            >
              Chat Now!
            </Link>
          </div>

          {/* Profile dash */}
          <div
            id="profile-dash"
            className="flex flex-col justify-between items-center py-6  outline outline-neutral card md:min-h-[400px]"
          >
            <h2 className="text-center text-xl font-semibold">
              View Your Profile
            </h2>
            <div className="card-body">
              <p>
                View your very own profile! Data and numbers and things. Oh and
                your personal biography! Very quaint.
              </p>
              <p className="font-semibold">
                Profile features on the way:
                <ul className=" list-disc list-inside">
                  <li>Profile pictures!</li>
                  <li>View other user's profiles!</li>
                  <li>Delete your profile!</li>
                </ul>
              </p>
            </div>
            <Link className="btn btn-primary max-w-[200px]" to="/home/profile">
              Profile Info
            </Link>
          </div>
        </div>

        {/* This card doesn't look good no matter what i try 12/6 */}
        {/* <div className="grid grid-flow-row  mt-5 mx-5">
          <div
            id="misc-dash"
            className="flex flex-col justify-between items-center py-6 card md:min-h-[400px]"
          >
            <h2 className="text-center card-title font-semibold">
              Hyrax Corporation Bulletin
            </h2>
            <div className="card-body">
              <p>
                <b>Employees of the Year</b> <br />
                Linda, Johnny, Fran, Zurple, Billy, and Mango
              </p>
              <figure>
                <img
                  src="/Hyrax-6891.jpg"
                  alt="Employees of the Year, (Linda, Johnny, Fran, Zurple, Billy, and Mango)"
                  className="rounded-xl max-w-[500px]"
                />
              </figure>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Dashboard;
