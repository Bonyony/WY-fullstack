const { authJWT } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  // test routes to see user capabilities
  app.get("/test/all", controller.allAccess);

  app.get("/test/user", [authJWT.verifyToken], controller.userBoard);

  app.get(
    "/test/mod",
    [authJWT.verifyToken, authJWT.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/test/admin",
    [authJWT.verifyToken, authJWT.isAdmin],
    controller.adminBoard
  );
};
