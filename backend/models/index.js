const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbModels = {};

dbModels.mongoose = mongoose;

dbModels.profile = require("./profileModel");
dbModels.role = require("./roleModel");
dbModels.messagesSent = require("./messagesSentModel");

dbModels.ROLES = ["user", "admin", "moderator"];

module.exports = dbModels;
