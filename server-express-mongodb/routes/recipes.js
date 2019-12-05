var express = require("express");
var router = express.Router();
var RecipeModel = require("../models/recipe");

router.get("/", function(req, res, next) {
  RecipeModel.find().then(recipes => res.json(recipes));
});

router.post("/", function(req, res, next) {
  let newRecipe = new RecipeModel();
  newRecipe.name = req.body.name;
  newRecipe.complete = req.body.complete;
  newRecipe.save().then(recipe => res.json(recipe));
});

router.delete("/:id", function(req, res, next) {
  RecipeModel.findByIdAndRemove(req.params.id, (err, recipe) => {
    if (err) return res.status(400).send(err);
    res.send(recipe);
  });
});

router.put("/:id", function(req, res, next) {
  RecipeModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      complete: req.body.complete
    },
    { new: true },
    (err, recipe) => {
      if (err) return res.status(400).send(err);
      res.send(recipe);
    }
  );
});

module.exports = router;
