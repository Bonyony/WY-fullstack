const { verifySignUp } = require("../middleware");
const controller = require("../controllers/authController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });
  //   make sure that the frontend routes are the same
  app.post(
    "/signup",
    [verifySignUp.checkDuplicates, verifySignUp.checkRoles],
    controller.signup
  );
  app.post("/login", controller.login);
  //   needs to be made 9/25
  app.post("/logout", controller.signout);
};
