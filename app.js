//dependencies
var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//var cors = require("cors");
var models = require("./models");
var mongoose = require("mongoose");

//pulling in routes
var indexRouter = require("./routes/index");
var tasksRouter = require("./routes/tasks");

//start express
var app = express();

//view engine setup
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger( format, "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use(cors());

//mounting index and tasks router
app.use('/', indexRouter);
app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

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
  "mongodb+srv://team-korbin:RECIPEAPP@cluster0-rsteg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
