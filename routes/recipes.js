const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Recipe = require('../models/recipe');
const checkId = require('../middlewares/utils');
const createError = require('http-errors');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('recipes');
});

router.get('/suggestions', (req, res, next) => {
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

router.get('/all', (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      res.render('listrecipes', { recipes });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/day', (req, res, next) => {
  const today = new Date();
  const dd = today.getDate();

  Recipe.find()
    .then(recipes => {
      const chosen = (recipes.length - 1) % dd;
      return recipes[chosen]._id;
    })
    .then(id => {
      Recipe.findById(id)
      .then(recipe => {
        res.render('recipedetail', recipe);
      })
      .catch(next);
    })
    .catch(next);
});

router.get('/:id', checkId, (req, res, next) => {
  const { id } = req.params;
  Recipe.findById(id)
    .then(recipe => {
      if (recipe) {
        res.render('recipedetail', recipe);
      } else {
        next(createError(404));
      }
    })
    .catch(error => {
      next(error);
    });
});


module.exports = router;
