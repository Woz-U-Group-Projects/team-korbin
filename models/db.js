const mongoose = requires('mongoose');

mongoose.connect('mongodb+srv://team-korbin:RECIPEAPP@cluster0-rsteg.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeesed.') }
    else {console.log('Error in DB connection : ' + err) }
});

require('./task.model');