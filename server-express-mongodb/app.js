var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var recipesRouter = require("./routes/recipes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/recipes", recipesRouter);

//var mongoDB = "mongodb://127.0.0.1/database";
var mongoDB =
  "mongodb+srv://admin:mjvx4KdK6XHEPKbl@cluster0-4c7hh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to |add> test db successfull. `)); // ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
