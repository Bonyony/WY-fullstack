const mongoose = require("mongoose");
const dbModels = require("../models");
const { ConnectionCheckOutFailedEvent } = require("mongodb");
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

function initial() {}

module.exports = connectToDB;
