import React from "react";
import { Link, useNavigate } from "react-router-dom";
import network from "/icons8-networking-100.png";

const Signup = () => {
  const navigate = useNavigate();
  const formAction = (e) => {
    e.preventDefault();
    // alert("Redirecting in 3... 2... 1...");
    setTimeout(() => {
      console.log("login!");
      navigate("/home/profile");
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-row justify-between">
            <Link to="/">
              <img
                src={network}
                alt="Structures of Data"
                className="bg-emerald-400 min-h-[100px] min-w-[100px] rounded-lg hover:rounded-2xl hover:bg-emerald-300 transition-all duration-500"
              />
            </Link>
            <h2 className="orbitron p-2 text-end text-balance text-2xl font-bold leading-9 tracking-tight text-emerald-400 ">
              Please enter your data into our system
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full  border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="block w-full  border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6"
                  >
                    Password
                  </label>
                  {/* This should maybe be removed from sign-up? */}
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="block w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center bg-emerald-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                >
                  Sign-Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
