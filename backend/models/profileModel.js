const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
      minLength: [2, "Username must be over 2 characters long!"],
      maxLength: [30, "Username must be under 30 characters long!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: [8, "Password must be over 8 characters long!"],
      maxLength: [30, "Password must be under 30 characters long!"],
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    biography: {
      type: String,
      trim: true,
      maxLength: [500, "Biography cannot exceed 500 characters!"],
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
