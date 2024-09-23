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
