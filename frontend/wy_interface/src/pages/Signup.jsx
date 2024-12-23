import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import network from "/icons8-networking-100.png";

import { ProfileContext } from "../App";

import { loginRequest, signupRequest } from "../utils/apiUtils";
import { validateInputs } from "../utils/validateInputsUtils";

const Signup = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    const newErrors = validateInputs(name, value, errors);
    setErrors(newErrors);
  };

  const formAction = async (e) => {
    e.preventDefault();
    try {
      signupRequest(inputs);
      const userData = await loginRequest(inputs);
      setProfile(userData);
      navigate("/home/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="lines flex flex-col justify-center h-screen">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-row justify-between">
            <Link to="/">
              <img
                src={network}
                alt="Structures of Data"
                className="bg-primary min-h-[100px] min-w-[100px] rounded-lg hover:rounded-2xl  transition-all duration-500"
              />
            </Link>
            <h2 className="orbitron p-2 text-end text-balance text-2xl font-bold leading-9 tracking-tight">
              Please enter your data into our system
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form id="user-signup" onSubmit={formAction} className="space-y-6">
              {/* username */}
              <div>
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6"
                  >
                    Username
                  </label>
                  {errors.username && (
                    <p className="text-error text-right text-xs mt-1 ml-2">
                      {errors.username}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={inputs.username || ""}
                    onChange={handleChange}
                    maxlength="20"
                    required
                    className="block w-full input input-bordered"
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
                    className="block w-full input input-bordered"
                  />
                </div>
              </div>
              {/* password */}
              <div>
                <div className="flex flex-row justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6"
                  >
                    Password
                  </label>
                  {errors.password && (
                    <p className="text-error text-right text-xs mt-1 ml-2">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                    maxlength="20"
                    required
                    className="block w-full input input-bordered"
                  />
                </div>
              </div>
              {/* submit button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center btn btn-outline px-3 py-1.5 font-semibold leading-6  shadow-sm  transition-all duration-200"
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
