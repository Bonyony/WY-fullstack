const dbModels = require("../models");
const Profile = dbModels.profile;

exports.updateBiography = async (req, res) => {
  try {
    // find username then only update the bio
    const user = await Profile.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found in our system." });
    }

    const newBio = req.body.biography;

    // update Profile with newBio
    const updatedUser = await Profile.findOneAndUpdate(
      {
        username: req.body.username,
      },
      {
        $set: { biography: newBio },
      },
      {
        new: true,
      }
    );
    console.log(updatedUser);
    // then send success code
    return res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating you biography.",
    });
  }
};
