var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Ingredient = require('../models/ingredient');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { currentUser } = req.session;
  User.findById(currentUser._id)
    .populate('fridge')
    .then(user => {
      let ingredients = {
        vegetables: [],
        meatAndFish: [],
        dairyAndEggs: [],
        fruits: [],
        cereals: [],
        sweets: []
      }
      user.fridge.forEach(element => {
        switch (element.type){
          case 'vegetable':
            ingredients.vegetables.push(element);
            break;
          case 'meat':
          case 'fish':
            ingredients.meatAndFish.push(element);
            break;
          case 'dairy':
          case 'eggs':
            ingredients.dairyAndEggs.push(element);
            break;
          case 'fruit':
            ingredients.fruits.push(element);
            break;
          case 'cereals':
            ingredients.cereals.push(element);
            break;
          case 'sweets':
            ingredients.sweets.push(element);
            break;
        }
      })

      res.render('fridge', { ingredients });
    })
    .catch(next);
});

router.get('/ingredients', function(req, res, next) {
  res.redirect('ingredients/add');
});

router.get('/ingredients/add', function(req, res, next) {
  const { currentUser } = req.session;
  User.findById(currentUser._id)
    .then(user => {
      
      return Ingredient.find( { "_id": { "$nin": user.fridge }}).sort( {name: 1} )
    })
    .then(ingredients => {
      console.log('ingredients', ingredients);
      res.render('ingredients', { ingredients });
    })
    .catch(next);
});

router.post('/ingredients/add', (req, res, next) => {
  const newIngredients = req.body.ingredient;
  const { currentUser } = req.session;

  User.findById(currentUser._id)
    .then((user) => {
      Ingredient.find( { "name": { "$in": newIngredients } } )
        .then(ingredients => {
          ingredients.forEach((ingredient) => {
            user.fridge.push(ingredient._id)
          })
          user.save()
            .then(() => {
              res.redirect('/fridge');
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

router.post('/ingredients/delete', (req, res, next) => {
  const ingredientsToDelete = req.body.ingredient;
  const { currentUser } = req.session;
  console.log(ingredientsToDelete);

  Ingredient.find( { "name": { "$in": ingredientsToDelete } }, { _id: 1} )
    .then(objects => {
      User.findByIdAndUpdate(currentUser._id, {"$pull": {"fridge": {"$in": objects}}})
        .then(user => {
          res.redirect('/fridge');
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
