const request = require("supertest");
const express = require("express");
const { getData } = require("../controllers/profileController");
const { profile: Profile } = require("../models");

const app = express();
// This function is in the profileController file
// The route is profileRoutes
app.get("/getprofile", getData);

jest.mock("../models", () => ({
  profile: {
    findOne: jest.fn(() => ({
      populate: jest.fn().mockResolvedValue(null), // Simulate the chained populate call
    })),
  },
}));

describe("GET /getprofile", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and user data when a valid username is provided", async () => {
    Profile.findOne.mockImplementationOnce(() => ({
      populate: jest.fn().mockResolvedValueOnce({
        _id: "12345",
        username: "testuser",
        email: "testuser@example.com",
        roles: [{ name: "user" }],
        biography: "Test biography",
        messagesSent: 10,
      }),
    }));

    const response = await request(app)
      .get("/getprofile")
      .query({ username: "testuser" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: "12345",
      username: "testuser",
      email: "testuser@example.com",
      roles: ["ROLE_USER"],
      biography: "Test biography",
      messagesSent: 10,
    });
    expect(Profile.findOne).toHaveBeenCalledWith({ username: "testuser" });
  });

  it("Should return 400 is no username is provided", async () => {
    const response = await request(app).get("/getprofile");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Username required." });
    expect(Profile.findOne).not.toHaveBeenCalled();
  });

  it("should return 404 if the user is not found", async () => {
    Profile.findOne.mockImplementationOnce(() => ({
      populate: jest.fn().mockResolvedValueOnce(null), // Simulate user not found after populate
    }));

    console.log("Mocked Profile.findOne response:", Profile.findOne);

    // Make the request
    const response = await request(app)
      .get("/getprofile")
      .query({ username: "Idonotexist65" });

    console.log("Response status:", response.status);
    console.log("Response body:", response.body);

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "User not found" });
    expect(Profile.findOne).toHaveBeenCalledWith({ username: "Idonotexist65" });
  });
});
