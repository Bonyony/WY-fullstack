const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log("Connected to MongoDB"));
  } catch (error) {
    console.log(error);
    // will end async promise
    process.exit(1);
  }
};

module.exports = connectToDB;
