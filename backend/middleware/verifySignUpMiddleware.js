const dbModels = require("../models");
const ROLES = dbModels.ROLES;
const Profile = dbModels.profile;

const checkDuplicates = async (req, res, next) => {
  try {
    const existingUsername = await Profile.findOne({
      username: req.body.username,
    });
    if (existingUsername) {
      return res
        .status(400)
        .send({ message: "Failed! That username is already taken..." });
    }

    const existingEmail = await Profile.findOne({ email: req.body.email });
    if (existingEmail) {
      return res
        .status(400)
        .send({ message: "Failed! That email is already taken..." });
    }

    next();
  } catch (err) {
    res
      .status(500)
      .send({
        message:
          err.message || "An error occurred while checking for duplicates.",
      });
  }
};

const checkRoles = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicates,
  checkRoles,
};

module.exports = verifySignUp;
