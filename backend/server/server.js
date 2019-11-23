require('.models/db');
require('./task.model');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('.models/db')
//const exphbs = require('express-handlebars');

//Connecting with mmongoDb
mongoose.connect('mongodb://localhost:3000/recipeapp-db', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else {console.log('Error in DB connection : ' + err) }
});

//Setting up the port with express.js
const taskRoute = require('./app/routes/task.route')
const app = express();
app.use(bodyParser.json());
app.use.apply(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(_dirname,'dist/mean-stack-crud-app')));
app.use('/api', taskRoute)

//Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connectd to port' + port)
});

//Find 404 and hand over the error handler
app.use((req, res, next) => {
    next(createError(404));
});

//error handler
app.use(function (err, req, res, next) {
    console.error(err.message); //Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; //if err has no specified error code
    res.status(err.statusCode).send(err.message); //All HTTP requests must have a 
});

// //const mongoose.Promise = global.Promise;
// //const mongoose.connect(dbConfig.db), {
//     //useNewURLParser: true
// //}).then(() => {
//     console.log('Database successfully connect')
// },
// error => {
//     console.log('Database cound not connect: ' + error)
// })

//const taskSchema = require('.models/tasks');

//var app = express();

//app.set('views', path.join(_direname, '/views/'));
//app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: _dirname + 'views/layouts/' }));
//app.set('view engine', 'hbs');

// app.listen(3000, () => {
//     console.log('Express server started at port : 3000');
// });

// app.use('/task', taskSchema)};