const config = require("../config/auth.js");
const dbModels = require("../models");
const Profile = dbModels.profile;
const Role = dbModels.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const profile = new Profile({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  profile
    .save()
    .then(() => {
      if (req.body.roles) {
        Role.find(
          {
            // may have to change this
            name: { $in: req.body.roles },
          },
          (err, roles) => {
            if (err) {
              res.status(500).send({
                message: "Line 28 10/1",
              });
              return;
            }

            user.roles = roles.map((role) => role._id);
            user.save().catch((err) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
            });

            res.send({ message: "User was registered successfully" });
          }
        );
      } else {
        Role.findOne({ name: "user" }, (err, role) => {
          if (err) {
            res.status(500).send({
              message: err,
            });
            return;
          }

          user.roles = [role._id];
          user.save().catch((err) => {
            if (err) {
              res.status(500).send({
                message: err,
              });
              return;
            }
            res.send({ message: "User was registered succesfully" });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
      return;
    });
};

exports.login = (req, res) => {
  Profile.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res
          .status(404)
          .send({ message: "User not found in our system." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password" });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400,
      });

      let authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
      });
    });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You have been signed out." });
  } catch (error) {
    this.next(error);
  }
};
