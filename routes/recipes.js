var express = require("express");
var router = express.Router();
var Recipe = require("../models/model.recipe");

//GET recipes listing
router.get("/", function(req, res, next) {
  Recipe.find().then(recipes => res.json(recipes));
});

//POST  new entry from dashboard
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
    newRecipe.directiona = req.body.directions,
    newRecipe.new = true
    )
    .then(recipe => 
      res.json(recipe))
    .catch(err => {
      res.status(400).send("Unable to save data to database on POST.  Error: " + err )
    });
});

//POST new entry from sidebar
router.post("/newentry/sidebar", function(req, res, next) {
  let newRecipe = new Recipe();
  newRecipe.save(
    newRecipe.name = req.body.recipeName,
    newRecipe.ingredients = req.body.ingredients[
      newRecipe.ingredientItem = req.body.ingredientItem,
      newRecipe.ingredientQty = req.body.ingredientQty,
      newRecipe.ingredientMeasurement = req.body.ingredientMeasurement
    ],
    newRecipe.image = req.body.ingredientImage,
    newRecipe.category = req.body.category,
    newRecipe.directiona = req.body.directions,
    newRecipe.new = true
    )
    .then(recipe => 
      res.json(recipe))
    .catch(err => {
      res.status(400).send("Unable to save data to database on POST.  Error: " + err )
    });
});

//PUT Update from new entry from dashboard
router.put("/:rId", function(req, res) {
  RecipeModel.findByIdAndUpdate(
    req.params.rId,
    {name: req.body.recipeName,
    ingredients: req.body.ingredients,
    ingredientItem: req.body.ingredientItem,
    ingredientQty: req.body.ingredientQty,
    ingredientMeasurement: req.body.ingredientMeasurement,
    image: req.body.ingredientImage,
    category: req.body.category
    }
    .then(recipe => 
      res.json(recipe))
    .catch(err => {
      res.status(400).send("Unable to save data to database on POST.  Error: " + err )
  }));
});

//PUT Update from new entry from sidebar
router.put("/:rId", function(req, res) {
  RecipeModel.findByIdAndUpdate(
    req.params.rId,
    {name: req.body.recipeName,
    ingredients: req.body.ingredients,
    ingredientItem: req.body.ingredientItem,
    ingredientQty: req.body.ingredientQty,
    ingredientMeasurement: req.body.ingredientMeasurement,
    image: req.body.ingredientImage,
    category: req.body.category
    }
    .then(recipe => 
      res.json(recipe))
    .catch(err => {
      res.status(400).send("Unable to save data to database on sidebar POST.  Error: " + err )
  }));
});

//PUT Update from new entry from dashbord
router.delete("/:rId", function(req, res, next) {
  Model.RecipeModel.findByIdAndRemove(
    req.params.rId, (error, data) => {
        if (error) {
		    return next (error);
		    } else {
		    res.status(200).json
        Mag: data
    .then(recipe => 
      res.json(recipe))
    .catch(err => {
      res.status(400).send("Unable to save data to database on POST.  Error: " + err )
    }
  )};
  })
});

// recipesRoute.route(‘/delete/:rId’).delete{(req, res, next) => {
// 	Recipes.findOneAndRemove(req.params.id, (error, data) => {
// 		If (error) {
// 		return next (error);
// 		} else {
// 		res.status(200).json
//     Mag: data
//     })
// 		}
// 	})
// })

module.exports = router;
// module.exports = Recipe;
