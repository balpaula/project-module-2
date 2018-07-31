var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Ingredient = require('../models/ingredient');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('fridge');
});

router.get('/ingredients', function(req, res, next) {
  res.send('ingredients');
  //redirect to ingredients/add
});

router.get('/ingredients/add', function(req, res, next) {
  Ingredient.find()
    .then(ingredients => {
      res.render('ingredients', { ingredients });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/ingredients/add', function(req, res, next) {
  const newIngredients = req.body.ingredient;
  const currentUser = req.session.currentUser;
  console.log(currentUser, currentUser._id, currentUser.fridge)
  User.findById(currentUser._id)
    .then((user) => {
      newIngredients.forEach(ingredient => {
        if (!user.fridge.includes(ingredient)) {
          user.fridge.push(ingredient);
        }
      })

      return user.save();
    })
    .then((user) => {
      console.log(user);
      res.redirect('/fridge');
    })
    .catch(next);
});

// router.post('/ingredients/:id/delete', function(req, res, next) {
  
// });

module.exports = router;
