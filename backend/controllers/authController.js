const config = require("../config/auth.js");
const dbModels = require("../models");
const Profile = dbModels.profile;
const Role = dbModels.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const profile = new Profile({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    const savedProfile = await profile.save();

    // If roles are provided in the request body
    if (req.body.roles) {
      const roles = await Role.find({
        name: { $in: req.body.roles },
      });

      savedProfile.roles = roles.map((role) => role._id);
    } else {
      // Assign default "user" role if no roles are provided
      const defaultRole = await Role.findOne({ name: "user" });
      savedProfile.roles = [defaultRole._id];
    }

    // Save the updated profile with roles
    await savedProfile.save();

    // IMPORTANT This only sneds a message that the user was generated correctly
    // To properly set the user's roles, a login must be made immediately after signup
    // on the frontend
    res.send({ message: "User was registered successfully" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while signing up the user.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // Find the user by username and populate roles
    const user = await Profile.findOne({
      username: req.body.username,
    }).populate("roles", "-__v");

    if (!user) {
      return res.status(404).send({ message: "User not found in our system." });
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });

    // Create authorities array based on user's roles
    const authorities = user.roles.map(
      (role) => "ROLE_" + role.name.toUpperCase()
    );

    // Store token
    req.session.token = token;

    // Send successful response with user details
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      biography: user.biography,
      messagesSent: user.messagesSent,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Some error occurred during login." });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You have been signed out." });
  } catch (error) {
    this.next(error);
  }
};
