const request = require("supertest");
const express = require("express");
const { verifySignUp } = require("../middleware");
const { signup } = require("../controllers/authController");

const app = express();
// make user to use the express.json() for these requests
app.use(express.json());
// This function is in the profileController file
app.put(
  "/signup",
  [verifySignUp.checkDuplicates, verifySignUp.checkRoles],
  signup
);

describe("POST /login", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //   it("should return 200 and register a new user", async () => {
  //     const response = await request(app).post("/signup").send({
  //       username: "NewTestUser",
  //       email: "abc123@gmail.com",
  //       password: "Testpasser2",
  //     });

  //     console.log("Response body:", response.body);

  //     expect(response.status).toBe(200);
  //     expect(response.body).toEqual({
  //       message: "User was registered successfully",
  //     });
  //   });
});
