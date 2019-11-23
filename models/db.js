const mongoose = requires('mongoose');

mongoose.connect('mongodb://localhost:3000/recipeapp-db', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB using Mongoose connection succeeded.') }
    else {console.log('Error in DB connection : ' + err) }
});

module.exports = db;