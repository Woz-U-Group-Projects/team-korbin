var express = require('express');
var router = express.Router();

// Home page functions
router.get('/', function(req, res, next) {
  res.render('get index', { title: 'Flavorly' });
});

router.post('/', function(req, res, next) {
  res.render('post index');
});

router.put('/', function(req, res, next) {
  res.render('put index');
});

router.delete('/', function(req, res, next) {
  res.render('delete index');
});

// Full form page functions
router.get('/tasks', function(req, res, next) {
  res.render('get tasks');
});

router.post('/', function(req, res, next) {
  res.render(' post tasks');
});

router.put('/', function(req, res, next) {
  res.render(' put tasks');
});

router.delete('/', function(req, res, next) {
  res.render('delete tasks');
});

// Simple form page functions
router.get('/tasks', function(req, res, next) {
  res.render('get tasks');
});

router.post('/', function(req, res, next) {
  res.render(' post tasks');
});

router.put('/', function(req, res, next) {
  res.render(' put tasks');
});

router.delete('/', function(req, res, next) {
  res.render('delete tasks');
});

// Recipe page functions
router.get('/tasks', function(req, res, next) {
  res.render('get tasks');
});

router.post('/', function(req, res, next) {
  res.render(' post tasks');
});

router.put('/', function(req, res, next) {
  res.render(' put tasks');
});

router.delete('/', function(req, res, next) {
  res.render('delete tasks');
});

module.exports = router;