const { authJWT } = require("../middleware");
const controller = require("../controllers/userController");
const dataController = require("../controllers/profileController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("profile/:id", dataController.getData);
};
