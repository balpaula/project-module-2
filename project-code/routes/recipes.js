var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('recipes');
});

router.get('/suggestions', function(req, res, next) {
  res.render('listrecipes');
});

router.get('/all', function(req, res, next) {
  res.render('listrecipes');
});

router.get('/:id', function(req, res, next) {
  res.render('recipedetail');
});

module.exports = router;
