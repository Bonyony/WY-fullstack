const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.profile = require("./profileModel");
db.role = require("./roleModel");

db.ROLES = ["user", "admin"];

module.exports = db;
