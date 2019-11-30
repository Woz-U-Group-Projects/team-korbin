var express = require("express");
var router = express.Router();
var Recipe = require("../models/model.recipe");

//GET recipes listing
router.get("/", function(req, res, next) {
  Recipe.find().then(recipes => res.json(recipes));
});

router.post("/newentry", function(req, res, next) {
  let newRecipe = new Recipe();
  newRecipe.save(
    // newRecipe.rId = req.params.rId,
    newRecipe.name = req.body.recipeName,
    newRecipe.ingredients = req.body.ingredients[
      newRecipe.ingredientItem = req.body.ingredientItem,
      newRecipe.ingredientQty = req.body.ingredientQty,
      newRecipe.ingredientMeasurement = req.body.ingredientMeasurement
    ],
    newRecipe.image = req.body.ingredientImage,
    newRecipe.category = req.body.category,
    newRecipe.new = true
    )
    .then(recipe => 
      res.json(recipe))
    .catch(err => {
      res.status(400).send("Unable to save data to database on POST.  Error: " + err );
    });
});

router.put("/:rId", function(req, res) {
  RecipeModel.findByIdAndUpdate(
    req.params.rId,
    {name: req.body.recipeName,
    ingredients: req.body.ingredients,
    ingredientItem: req.body.ingredientItem,
    ingredientQty: req.body.ingredientQty,
    ingredientMeasurement: req.body.ingredientMeasurement,
    image: req.body.ingredientImage,
    category: req.body.category},
    { new: true },
    (err, recipe) => {
      if (err) return res.status(400).send(err);
      res.send(recipe);
    }
  );
});

router.delete("/:rId", function(req, res, next) {
  RecipeModel.findByIdAndRemove(req.params.rId, (err, recipe) => {
    if (err) return res.status(400).send(err);
    res.send(recipe);
  });
});


module.exports = router;
// module.exports = Recipe;
