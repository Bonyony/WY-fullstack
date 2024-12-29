const dbModels = require("../models");
const Profile = dbModels.profile;

exports.updateBiography = async (req, res) => {
  try {
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

    console.log(updatedUser);
    // then send success code
    return res.status(200).send(updatedUser);
  } catch (err) {
    console.error("Error updating biography:", err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating you biography.",
    });
  }
};
