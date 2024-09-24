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
const isAdmin = (req, res, next) => {
  Profile.findById(req.userID).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        // may have to rework this and the '$in'
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
        res.status(403).send({ message: "This requires an Admin level." });
        return;
      }
    );
  });
};

const isModerator = (req, res, next) => {
  Profile.findById(req.userID).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        // may have to rework this and the '$in'
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
        }
        res
          .status(403)
          .send({ message: "This requires at least Moderator level." });
        return;
      }
    );
  });
};

const authJWT = {
  verifyToken,
  isAdmin,
  isModerator,
};

module.exports = authJWT;
