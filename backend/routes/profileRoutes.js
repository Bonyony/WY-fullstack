const controller = require("../controllers/bioController");
const controller2 = require("../controllers/profileController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.put("/biography", controller.updateBiography);

  app.get("/getprofile", controller2.getData);
};
