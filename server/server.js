require('.models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const taskSchema = require('.models/tasks');

var app = express();

app.set('views', path.join(_direname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: _dirname + 'views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/task', taskSchema);