var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Ingredient = require('../models/ingredient');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { currentUser } = req.session;
  User.findById(currentUser._id)
    .then(user => {
      let ingredients = user.fridge;
      res.render('fridge', { ingredients });
    })
    .catch(next);
});

router.get('/ingredients', function(req, res, next) {
  res.send('ingredients');
  //redirect to ingredients/add
});

router.get('/ingredients/add', function(req, res, next) {
  const { currentUser } = req.session;
  User.findById(currentUser._id)
    .then(user => {
      const ingredientIds = user.fridge.map(ingredient => {
        return ObjectId(ingredient._id)
      })
      return Ingredient.find( { "_id": { "$nin": ingredientIds }})
    })
    .then(ingredients => {
      res.render('ingredients', { ingredients });
    })
    .catch(next);
});

router.post('/ingredients/add', (req, res, next) => {
  const newIngredients = req.body.ingredient;
  const { currentUser } = req.session;

  User.findById(currentUser._id)
  .then((user) => {
    return user.fridge
  })
  .then((fridge) => {
    Ingredient.find( { "name": { "$in": newIngredients } } )
    .then((ingredients) => {
      // User.findById(currentUser._id, { "$push": { "fridge": { "$each": ingredients }}})
      User.update( {"_id": currentUser._id },{ "$push": { "fridge": { "$each": ingredients }}})
    })
    .then(() =>{
      res.redirect('/fridge')
    })
    .catch(next);
  })
  })

// router.post('/ingredients/add', function(req, res, next) {
//   const newIngredients = req.body.ingredient;
//   let ingredients = [];

//   if (typeof newIngredients === "string"){
//     Ingredient.findOne({name: newIngredients})
//       .then(obj => {
//         ingredients.push(obj);
//       })
//       .catch(next);
//   } else {
//     newIngredients.forEach(ingredient => {
//       Ingredient.findOne({name: ingredient})
//         .then(obj => {
//           ingredients.push(obj);
//         })
//         .catch(next);
//     })
//   }

//   const currentUser = req.session.currentUser;
//   User.findById(currentUser._id)
//     .then((user) => {
//        newIngredients.forEach(ingredient => {
//         if (!user.fridge.includes(ingredient)) {
//       let ingredientsID = user.fridge.map(element => {
//         let id  = element._id.toString();
//         return id;
//       })

//       console.log(ingredientsID);

//       ingredients.forEach(ingredient => {
//         let id = ingredient._id.toString();
//         if (!ingredientsID.includes(id)) {
//           user.fridge.push(ingredient);
//         }
//       })
//       return user.save();
//     }})
//     .then((user) => {
//       res.redirect('/fridge');
//     })
//     .catch(next);
// });

// router.post('/ingredients/:id/delete', function(req, res, next) {
  
// });

module.exports = router;
