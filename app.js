//dependencies
var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("./cors");
var models = require("./models");

//pulling in routes
var indexRouter = require("./routes/index");
var recipeRouter = require("./routes/recipe");
//var usersRouter = require("./routes/users");

//start express
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use(cors());

//mounting index and tasks router
app.use('/', indexRouter);
app.use("/recipe", recipeRouter);
//app.use("/users", usersRouter);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.local.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});

//var mongoDB = "mongodb://127.0.0.1/database";
var mongoDB =
  "mongodb+srv://slkoukas14:Ridi7869trust@cluster0-w92bc.mongodb.net/test?retryWrites=true&w=majority";  
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log("Mongoose connection open to test db!")); //${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;