var express = require("express");
var router = express.Router();
var RecipeModel = require("../models/recipe");

//GET all recipes
router.get("/", function (req, res, next) {
  RecipeModel.find().then(recipes => res.json(recipes));
});

//GET one recipe
router.get("/recipe/:vId", function (req, res, next) {
  let id = req.params.vId
  RecipeModel.findById(id, (error, recipe) => {
    if (error) {
      return next(error)
    } else {
      res.json(recipe)
    }
  })
});

//POST new recipe
router.post("/", function (req, res, next) {
  let newRecipe = new RecipeModel({
    recipeName: req.body.recipeName,
    directions: req.body.directions,
    recipeImage: req.body.recipeImage,
    active: req.body.active = true,
    ingredients: req.body.ingredients = [
      {
        qty: req.body.qty,
        measurement: req.body.measurement,
        ingredient: req.body.ingredient
      }],

  });
  newRecipe.save()
    .catch(err => {
      res.status(400).send("Unable to save data to database on POST.  Error: " + err);
    })
    .then(recipe => res.json(recipe))
});

//DELETE one recipe
router.delete("/delete/:vId", function (req, res, next) {
  let id = req.params.vId;
  RecipeModel.findByIdAndRemove(req.params.id, (err, recipe) => {
    if (err) return res.status(400).send(err);
    res.send(recipe);
  });
});

//UPDATE one recipe
router.put("/recipe/:vId", function (req, res, next) {
  let id = req.params.id;
  RecipeModel.findByIdAndUpdate(
    req.params.id,
    {
      recipeName: req.body.recipeName,
      active: req.body.active
    },
    { new: true },
    (err, recipe) => {
      if (err) return res.status(400).send(err);
      res.send(recipe);
    }
  );
});

//UPDATE one recipe with ingredients
router.put("/recipe/ing/:vId", function (req, res, next) {
  RecipeModel.findByIdAndUpdate(
    req.params.id,
    {
      ingredient: req.body.ingredient,
      qty: req.body.qty
    },
    { new: true },
    (err, recipe) => {
      if (err) return res.status(400).send(err);
      res.send(recipe);
    }
  );
});

module.exports = router;
