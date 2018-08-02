var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Recipe = require('../models/recipe');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('recipes');
});

router.get('/suggestions', function(req, res, next) {
  const { currentUser } = req.session;
  User.findById(currentUser._id)
    .populate('fridge')
    .then(user => {
      const names = user.fridge.map(element => {
        return element.name;
      });
      return names;
    })
    .then(names => {
      Recipe.find({ ingredients: { $not: { $elemMatch: { $nin: names } } } })
        .then(recipes => {
          console.log(recipes);
          res.render('listrecipes', { recipes });
        })
        .catch(error => {
          next(error);
        });
    })
    .catch(next);
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
