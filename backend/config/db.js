const mongoose = require("mongoose");
const dbModels = require("../models");
const Role = dbModels.role;

const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log("Connected to MongoDB"));
    initial();
  } catch (error) {
    console.error("Connection error", error);
    // will end async promise
    process.exit(1);
  }
};

// create roles within MongoDB
// works for now, seems extremely error prone, but the roles exist...
function initial() {
  Role.estimatedDocumentCount()
    .then((count) => {
      if (count === 0) {
        new Role({
          name: "user",
        }).save();
        console.log("addded 'user' to roles collection");

        new Role({
          name: "moderator",
        }).save();
        console.log("addded 'moderator' to roles collection");

        new Role({
          name: "admin",
        }).save();
        console.log("addded 'admin' to roles collection");
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
}

module.exports = connectToDB;
