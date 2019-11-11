var express = require('express');
var router = express.Router();

// HOME PAGE functions
router.get('/', function(req, res, next) {
  res.render('get index', { title: 'Flavorly' });
});

router.post('/', function(req, res, next) {
  res.send('post index');
});

router.put('/', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body.name);
  res.send('put index');
});

router.delete('/', function(req, res, next) {
  res.send('delete index');
});

// FULL FORM page functions
router.get('/tasks', function(req, res, next) {
  res.render('get tasks');
});

router.post('/', function(req, res, next) {
  res.send(' post tasks');
});

router.put('/', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body.name);
  res.send(' put tasks');
});

router.delete('/', function(req, res, next) {
  res.send('delete tasks');
});

// SIMPLE FORM page functions
router.get('/tasks', function(req, res, next) {
  res.render('get tasks');
});

router.post('/', function(req, res, next) {
  res.send(' post tasks');
});

router.put('/', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body.name);
  res.send(' put tasks');
});

router.delete('/', function(req, res, next) {
  res.send('delete tasks');
});

// RECIPE page functions
router.get('/tasks', function(req, res, next) {
  res.render('get tasks');
});

router.post('/', function(req, res, next) {
  res.send(' post tasks');
});

router.put('/', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body.name);
  res.send(' put tasks');
});

router.delete('/', function(req, res, next) {
  res.send('delete tasks');
});

module.exports = router;