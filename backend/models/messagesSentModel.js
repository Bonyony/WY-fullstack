const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesSentSchema = new Schema(
  {
    messagesSent: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const MessagesSent = mongoose.model("MessagesSent", roleSchema);
module.exports = MessagesSent;
