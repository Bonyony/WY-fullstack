import React, { useRef, useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import alien from "/icons8-alien-64.png";
import { ProfileContext } from "../App";

const Login = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  // this form action should only fire if the profile returns 200
  const formAction = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", inputs, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
        navigate("/home/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col">
            <h2 className="orbitron p-2  text-center text-2xl font-bold leading-9 tracking-tight text-emerald-400 ">
              Welcome back traveller
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form id="user-login" className="space-y-6" onSubmit={formAction}>
              {/* username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 "
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                    required
                    className="block w-full  border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                    required
                    className="block w-full  border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6"
                  >
                    Password
                  </label>
                  {/* This should maybe be removed from login? */}
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    required
                    className="block w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* submit button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center bg-emerald-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
