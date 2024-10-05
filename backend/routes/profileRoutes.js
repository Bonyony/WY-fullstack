const { authJWT } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("profile/:id", (req, res) => {
    const data = { message: "Testing on myself... GULP!" };
    res.json(data);
  });
};
