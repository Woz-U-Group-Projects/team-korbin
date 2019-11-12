const mongoose = requires('mongoose');

mongoose.connect('mongodb://localhost:3000/recipeapp-db', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeesed.') }
    else {console.log('Error in DB connection : ' + err) }
});

require('./task.model');