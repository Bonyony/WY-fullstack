const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
const dbModels = require("../models");
const Profile = dbModels.profile;
const Role = dbModels.role;

// check the webtokens and verify they exist
const verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({ message: "No token provided." });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!!!",
      });
    }
    req.userID = decoded.id;
    next();
  });
};

// check for admin and moderator status
const isAdmin = async (req, res, next) => {
  try {
    // Find the user by their ID
    const user = await Profile.findById(req.userID);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Find the roles associated with the user
    const roles = await Role.find({ _id: { $in: user.roles } });

    // Check if any of the user's roles is "admin"
    const isAdminRole = roles.some((role) => role.name === "admin");

    if (isAdminRole) {
      return next(); // User is admin, proceed to next middleware
    } else {
      return res
        .status(403)
        .send({ message: "This action requires Admin level." });
    }
  } catch (err) {
    return res.status(500).send({
      message: err.message || "An error occurred while checking admin status.",
    });
  }
};

// same logic as admin, but for moderator
const isModerator = async (req, res, next) => {
  try {
    const user = await Profile.findById(req.userID);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Find the roles associated with the user
    const roles = await Role.find({ _id: { $in: user.roles } });
    // Check if any of the user's roles is "moderator"
    const isModeratorRole = roles.some((role) => role.name === "moderator");

    if (isModeratorRole) {
      return next(); // User is moderator, proceed to next middleware
    } else {
      return res
        .status(403)
        .send({ message: "This action requires Moderator level." });
    }
  } catch (err) {
    return res.status(500).send({
      message:
        err.message || "An error occurred while checking moderator status.",
    });
  }
};

const authJWT = {
  verifyToken,
  isAdmin,
  isModerator,
};

module.exports = authJWT;
