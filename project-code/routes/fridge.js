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

// router.post('/ingredients/add', function(req, res, next) {
  
// });

// router.post('/ingredients/:id/delete', function(req, res, next) {
  
// });

module.exports = router;
