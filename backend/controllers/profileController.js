const dbModels = require("../models");
const Profile = dbModels.profile;

exports.getData = async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).send({ message: "Username required." });
    }

    const user = await Profile.findOne({
      username,
    }).populate("roles", "-__v");

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Create authorities array based on populated roles
    const authorities = user.roles.map(
      (role) => "ROLE_" + role.name.toUpperCase()
    );

    // same as other requests always sending the full params
    return res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      biography: user.biography,
      messagesSent: user.messagesSent,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the user's data.",
    });
  }
};
