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
    console.log("sending inputs ", inputs);

    if (!inputs.username || !inputs.biography) {
      throw new Error("Invalid inputs: username and biography are required.");
    }
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserProfile = async (inputs) => {
  try {
    if (!inputs.username) {
      throw new Error("Invalid inputs: username and biography are required.");
    }

    // the axios GET method takes a different order of parameters than PUT and POST
    const response = await axios.get("http://localhost:3000/getprofile", {
      params: inputs,
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
