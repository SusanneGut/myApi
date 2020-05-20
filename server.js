var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require("./api/models/myApiModel"), //loading the created model
  bodyParser = require("body-parser");

//mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/myApidb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
}); //redirect and respond whenever a wrong route is entered on the site

var routes = require("./api/routes/myApiRoutes"); //importing route
routes(app); //register route

app.listen(port);

console.log("myApi server started on: " + port);
