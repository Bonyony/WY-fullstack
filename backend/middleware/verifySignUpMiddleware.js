const dbModels = require("../models");
const ROLES = dbModels.ROLES;
const Profile = dbModels.profile;

const checkDuplicates = (req, res, next) => {
  // username
  Profile.findOne({
    username: req.body.username,
  }).then(function (err, user) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res
        .status(400)
        .send({ message: "Failed! That username is already taken..." });
    }
    // email
    Profile.findOne({
      email: req.body.email,
    }).then(function (err, user) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res
          .status(400)
          .send({ message: "Failed! That email is already taken..." });
      }

      next();
    });
  });
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
