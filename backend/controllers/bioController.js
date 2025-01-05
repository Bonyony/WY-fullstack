const dbModels = require("../models");
const Profile = dbModels.profile;

exports.updateBiography = async (req, res) => {
  try {
    console.log("Recieved: ", JSON.stringify(req.body, null, 2));
    if (!req.body.username || !req.body.biography) {
      return res
        .status(400)
        .send({ message: "Username and biography required." });
    }

    // update Profile with newBio
    const updatedUser = await Profile.findOneAndUpdate(
      {
        username: req.body.username,
      },
      {
        $set: { biography: req.body.biography },
      },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    const populatedUser = await Profile.findById(updatedUser._id).populate(
      "roles",
      "-__v"
    );

    // Create authorities array based on populated roles
    const authorities = populatedUser.roles.map(
      (role) => "ROLE_" + role.name.toUpperCase()
    );

    // then send success code
    // This send the same info as when you log in so
    // the data is consistent across the site
    return res.status(200).send({
      id: populatedUser._id,
      username: populatedUser.username,
      email: populatedUser.email,
      roles: authorities,
      biography: populatedUser.biography,
      messagesSent: populatedUser.messagesSent,
    });
  } catch (err) {
    console.error("Error updating biography:", err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating you biography.",
    });
  }
};
