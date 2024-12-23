const dbModels = require("../models");
const Profile = dbModels.profile;

exports.updateBiography = async (req, res) => {
  try {
    // perhaps findOneAndUpdate?
    // find username then only update the bio?
    const user = await Profile.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found in our system." });
    }

    const newBio = req.body.biography;

    // update Profile with newBio
    // then send success code
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating you biography.",
    });
  }
};
