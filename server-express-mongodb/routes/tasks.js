var express = require("express");
var router = express.Router();
var TaskModel = require("../models/task");

router.get("/", function(req, res, next) {
  TaskModel.find().then(tasks => res.json(tasks));
});

router.post("/", function(req, res, next) {
  let newTask = new TaskModel();
  newTask.name = req.body.name;
  newTask.complete = req.body.complete;
  newTask.save().then(task => res.json(task));
});

router.delete("/:id", function(req, res, next) {
  TaskModel.findByIdAndRemove(req.params.id, (err, task) => {
    if (err) return res.status(400).send(err);
    res.send(task);
  });
});

router.put("/:id", function(req, res, next) {
  TaskModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      complete: req.body.complete
    },
    { new: true },
    (err, task) => {
      if (err) return res.status(400).send(err);
      res.send(task);
    }
  );
});

module.exports = router;
