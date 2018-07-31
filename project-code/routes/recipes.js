var express = require('express');
var router = express.Router();
const Recipe = require('../models/recipe');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('recipes');
});

router.get('/suggestions', function(req, res, next) {
  res.render('listrecipes');
});

router.get('/all', function(req, res, next) {
  Recipe.find()
    .then(recipes => {
      res.render('listrecipes', { recipes });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Recipe.findById(id)
    .then(recipe => {
      res.render('recipedetail', recipe);
    })
    .catch(error => {
      next(error);
    });
});



module.exports = router;
