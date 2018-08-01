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
  res.send('ingredients');
  //redirect to ingredients/add
});

router.get('/ingredients/add', function(req, res, next) {
  const { currentUser } = req.session;
  User.findById(currentUser._id)
    .then(user => {
      
      return Ingredient.find( { "_id": { "$nin": user.fridge }})
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

  //primero buscan los ingredientes
  // dentro del then de la resolucion
  //.then((data)) => {
  // User.findByIdAndUpdate(cuenter, data)  
  //}
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
    .catch(next)
    
    
  });

router.post('/ingredients/delete', (req, res, next) => {
  const ingredientsToDelete = req.body;
  const { currentUser } = req.session;

  User.findByIdAndUpdate(currentUser._id, {$pull: {fridge: {name: {$each: ingredientsToDelete}}}})
  .then(user => {
    console.log(user);
    res.redirect('/fridge');
  })
  .catch(next);
});

  // User.findById(currentUser._id)
  // .then((user) => {
  //   return user.fridge
  // })
  // .then((fridge) => {
  //   Ingredient.find( { "name": { "$in": newIngredients } } )
  //   .then((ingredients) => {
  //     currentUser.fridge.push(ingredients)
  //     // User.findById(currentUser._id, { "$push": { "fridge": { "$each": ingredients }}})
  //     // User.update({"_id": currentUser._id },{ $push: { "fridge": { "$each": ingredients }}})
  //     // User.update({"_id": currentUser._id },{ $pushAll: { "fridge":  ingredients }})
  //   })
  //   .then(() =>{
  //     res.redirect('/fridge')
  //   })
  //   .catch(next);
  // })
  // })

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
