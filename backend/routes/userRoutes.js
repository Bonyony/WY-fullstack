const { authJWT } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/all", controller.allAccess);

  app.get("/user", [authJWT.verifyToken], controller.userBoard);

  app.get(
    "/mod",
    [authJWT.verifyToken, authJWT.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/admin",
    [authJWT.verifyToken, authJWT.isAdmin],
    controller.adminBoard
  );
};
