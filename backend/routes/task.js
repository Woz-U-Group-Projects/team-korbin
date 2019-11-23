const express = require("express");
const app = express();
const taskRouter = express.Router();
const TaskModel = require("./models/task");

//Add recipe
taskRoute.router('/create').post((req, res, next) => {
  TaskModel.create(req.body, (error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//Get all recipes
taskRoute.router('/').get((req, res) => {
  TaskModel.find((error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//Get single recipe
taskRoute.router('/read/:id').get((req, res) => {
  TaskModel.findById(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//Update receipe
taskRoute.router('/update/:id').put((req, res, next) => {
  TaskModel.findByIdAndUpdate(req.params.id, {
    $set:req.body},(error, data) => {
    if(error) {
      return next(error);
      console.log(error)
    }
    else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

//Delete recipe
taskRoute.router('/delete/:id').delete((req, res, next) => {
  TaskModel.findOneAndRemove(req.params.id, (error, data) => {
    if(error) {
      return next(error);
    }
    else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = taskRouter;

// //GET tasks listing
// router.get("/", function(req, res, next) {
//   TaskModel.find().then(tasks => res.json(tasks));
// });

// router.post("/", function(req, res, next) {
//   let newTask = new TaskModel();
//   newTask.name = req.body.name;
//   newTask.complete = req.body.complete;
//   newTask.save().then(task => res.json(task));
// });

// router.delete("/:id", function(req, res, next) {
//   TaskModel.findByIdAndRemove(req.params.id, (err, task) => {
//     if (err) return res.status(400).send(err);
//     res.send(task);
//   });
// });

// router.put("/:id", function(req, res, next) {
//   TaskModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       complete: req.body.complete
//     },
//     { new: true },
//     (err, task) => {
//       if (err) return res.status(400).send(err);
//       res.send(task);
//     }
//   );
// });


