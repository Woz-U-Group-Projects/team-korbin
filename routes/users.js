var express = require("express");
var router = express.Router();
var TaskModel = require("../models/tasks");

/*GET user listing */
router.get("/", function(req, res, next) {
    res.send('respond with a resource');
  });

router.get("/signup", function(req, res, next) {
    res.render('signup');
  });

  /* Create new user */
  router.post("/signup", function(req, res, next) {
    models.users 
    .findOrCreate( options, {
        where: {
            Username: req.body.username
        },
        defaults: {
            FirstName: req.body.firstName,
            LastName: req.body.LastName,
            Email: req.body.email
        }
    })
    .spread(function(result, created) {
        if (created) {
            res.send('User created');
        }
        else {
            res.send('User already exists');
        }
    });
  });

router.get("/login", function(req, res, next) {
    res.render("login");
});


