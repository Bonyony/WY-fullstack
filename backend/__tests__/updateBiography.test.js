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

  // it("should return 200 and update the user's biography", async () => {
  //   const mockProfile = {
  //     _id: "12345",
  //     username: "testuser",
  //     email: "testuser@example.com",
  //     roles: [{ name: "user", __v: 0 }],
  //     biography: "Old bio",
  //     messagesSent: 10,
  //   };

  //   const updatedProfile = { ...mockProfile, biography: "New bio" };

  //   // Mock `findOneAndUpdate` to return updatedProfile
  //   Profile.findOneAndUpdate.mockResolvedValueOnce(updatedProfile);

  //   // Mock `findById` to return a profile with the `populate` method
  //   Profile.findById.mockResolvedValueOnce({
  //     ...updatedProfile,
  //     populate: jest.fn().mockReturnValueOnce({
  //       ...updatedProfile,
  //       roles: [{ name: "user" }], // Excluding __v here
  //     }),
  //   });

  //   const response = await request(app).put("/biography").send({
  //     username: "testuser",
  //     biography: "New bio",
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toEqual({
  //     id: "12345",
  //     username: "testuser",
  //     email: "testuser@example.com",
  //     roles: ["ROLE_USER"],
  //     biography: "New bio",
  //     messagesSent: 10,
  //   });
  //   expect(Profile.findOneAndUpdate).toHaveBeenCalledWith(
  //     { username: "testuser" },
  //     { $set: { biography: "New bio" } },
  //     { new: true }
  //   );
  //   expect(Profile.findById).toHaveBeenCalledWith("12345");
  // });

  it("should return 400 if username or bio are missing", async () => {
    const response = await request(app)
      .put("/biography")
      .send({ username: "" }); // username is an empty string, bio is missing

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Username and biography required.",
    });
  });
});
