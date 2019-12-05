var express = require("express");
var router = express.Router();
var RecipeModel = require("../models/recipe");

router.get("/", function(req, res, next) {
  RecipeModel.find().then(recipes => res.json(recipes));
});

router.post("/", function(req, res, next) {
  let newRecipe = new RecipeModel();
  // newRecipe.recipeId = req.parms.id;
  newRecipe.recipeName = req.body.recipeName;
  newRecipe.complete = req.body.complete = true;
  newRecipe.save()
  .catch(err => {
    res.status(400).send("Unable to save data to database on POST.  Error: " + err );
  })
  .then(recipe => res.json(recipe))
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
      recipeName: req.body.recipeName,
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
