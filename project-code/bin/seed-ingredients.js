const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fridgeat');

const Ingredient = require('../models/ingredient');

const ingredients = [
    {
        name: 'potato',
        type: 'vegetable',
        quantity: 1,
        image: 'asd'
    }
]

Ingredient.create(ingredients)
    .then((data) => {
        console.log('ok');
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(error);
        mongoose.connection.close();
    });