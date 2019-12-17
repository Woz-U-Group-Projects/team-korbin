var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var recipesRouter = require("./routes/recipes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Attempting to display files
app.use("./public", express.static("images"));  //attempt 1
app.use("/recipes", recipesRouter); //attempt 1

app.use(express.static(path.resolve('./public')));  //attempt 2
app.use('/images', express.static(path.resolve(''))) 

// Server static files from /browser
// app.get('*.*', express.static(join(IMAGES_FOLDER, 'browser'))); //from Angular documentation

//var mongoDB = "mongodb://127.0.0.1/database";
var mongoDB =
  "mongodb+srv://slkoukas14:Ridi7869trust@cluster0-w92bc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to recipeapp db successfull. `)); // ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));


module.exports = app;
