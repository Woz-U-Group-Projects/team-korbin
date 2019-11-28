// require('.models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const cors = require('cors');
const bodyparser = require('body-parser');
const dbConfig = require('../models/db')
// const taskSchema = require('.models/tasks');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { useNewUrlParser: true })
    .then(() => {
        console.log('Server connection to database is successful.');
    },
        error => {
            console.log('Server connection to database could not be made: ' + error)
        }
    )

app.set('views', path.join(_direname, '/views/'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({ extname: 'hbs'}));

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/task', taskSchema);