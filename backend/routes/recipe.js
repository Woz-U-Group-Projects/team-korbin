const express = require("express");
const app = express();
const recipeRoute = express.Router();
const recipeModel = require("../models/recipe");

//POST Create Recipe
recipeRoute.route('/create').post((req, res, next) => {
  recipeModel.create(req.body, (error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//GET All Recipes
recipeRoute.route('/').get((req, res) => {
  recipeModel.find((error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//GET Single Recipe
recipeRoute.route('/read/:id').get((req, res) => {
  recipeModel.findById(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//PUT Update Receipe
recipeRoute.route('/update/:id').put((req, res, next) => {
  recipeModel.findByIdAndUpdate(req.params.id, {
    $set:req.body},(error, data) => {
    if(error) {
      return next(error);
      console.log(error)
    }
    else {
      res.json(data)
      console.log('Updated successfully')
    }
  })
})

//DELETE recipe
recipeRoute.router('/delete/:id').delete((req, res, next) => {
  recipeModel.findOneAndRemove(req.params.id, (error, data) => {
    if(error) {
      return next(error);
    }
    else {
      res.status(200).json({
        mag: data
      })
    }
  })
})

module.exports = recipeRoute;

// //GET recipes listing
// router.get("/", function(req, res, next) {
//   recipeModel.find().then(recipes => res.json(recipes));
// });

// router.post("/", function(req, res, next) {
//   let newrecipe = new recipeModel();
//   newrecipe.name = req.body.name;
//   newrecipe.complete = req.body.complete;
//   newrecipe.save().then(recipe => res.json(recipe));
// });

// router.delete("/:id", function(req, res, next) {
//   recipeModel.findByIdAndRemove(req.params.id, (err, recipe) => {
//     if (err) return res.status(400).send(err);
//     res.send(recipe);
//   });
// });

// router.put("/:id", function(req, res, next) {
//   recipeModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       complete: req.body.complete
//     },
//     { new: true },
//     (err, recipe) => {
//       if (err) return res.status(400).send(err);
//       res.send(recipe);
//     }
//   );
// });


