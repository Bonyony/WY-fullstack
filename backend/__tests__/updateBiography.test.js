const request = require("supertest");
const express = require("express");
const { profile: Profile } = require("../models");
const { updateBiography } = require("../controllers/bioController");

const app = express();
// make user to use the express.json() for these requests
app.use(express.json());
// This function is in the profileController file
app.put("/biography", updateBiography);

jest.mock("../models", () => ({
  profile: {
    findOneAndUpdate: jest.fn(),
    findById: jest.fn(),
  },
}));

describe("PUT /biography", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // I cannot get the populate method to return anything usable

  it("should return 400 if username or bio are missing", async () => {
    const response = await request(app)
      .put("/biography")
      .send({ username: "" }); // username is an empty string, bio is missing

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Username and biography required.",
    });
  });

  it("should return 404 if the user does not exist", async () => {
    const response = await request(app).put("/biography").send({
      username: "NotinDB",
      biography: "Bio holder",
    });
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: "User not found",
    });
  });
});
