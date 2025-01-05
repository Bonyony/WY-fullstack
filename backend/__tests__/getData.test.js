const request = require("supertest");
const express = require("express");
const { getData } = require("../controllers/profileController");
const dbModels = require("../models");

const app = express();
app.get("/getprofile", getData);

jest.mock("../models", () => ({
  profile: {
    findOne: jest.fn(),
  },
}));

const Profile = dbModels.profile;

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
});
