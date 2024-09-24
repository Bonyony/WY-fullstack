const authJWT = require("./authJWTMiddleware");
const verifySignUp = require("./verifySignUpMiddleware");

module.exports = {
  authJWT,
  verifySignUp,
};
