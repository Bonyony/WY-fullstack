const dbModels = require("../models");
const Profile = dbModels.profile;
const Role = dbModels.role;

const getData = async (req, res) => {
  try {
    const id = req.params.id;
    Profile.findById(id).then((result) => {
      res.render("profile/:id", { profile: result });
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the user's data.",
    });
  }
};

module.exports = {
  getData,
};
