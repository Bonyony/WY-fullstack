import axios from "axios";

export const loginRequest = async (inputs) => {
  try {
    const response = await axios.post("http://localhost:3000/login", inputs, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signupRequest = async (inputs) => {
  try {
    const response = await axios.post("http://localhost:3000/signup", inputs, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const bioRequest = async (inputs) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/biography",
      inputs,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
