const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fridgeat');

const Ingredient = require('../models/ingredient');

const ingredients = [
    {
        name: 'pepper',
        type: 'vegetable',
        image: 'http://localhost:3000/images/icon/Pepper.svg'
    },
    {
        name: 'lettuce',
        type: 'vegetable',
        image: 'http://localhost:3000/images/icon/Lettuce.svg'
    },
    {
        name: 'bread',
        type: 'cereals',
        image: 'asd'
    },
    {
        name: 'cheese',
        type: 'dairy',
        image: 'http://localhost:3000/images/icon/Cheese.svg'
    },
    {
        name: 'chicken',
        type: 'meat',
        image: 'http://localhost:3000/images/icon/Chicken.svg'
    },
    {
        name: 'watermelon',
        type: 'fruit',
        image: 'http://localhost:3000/images/icon/Watermelon.svg'
    },
    {
        name: 'lemon',
        type: 'fruit',
        image: 'http://localhost:3000/images/icon/Lemon.svg'
    },
    {
        name: 'cookies',
        type: 'sweets',
        image: 'asd'
    },
    {
        name: 'steak',
        type: 'meat',
        image: 'http://localhost:3000/images/icon/Steak.svg'
    },
    {
        name: 'milk',
        type: 'dairy',
        image: 'http://localhost:3000/images/icon/Milk.svg'
    },
    {
        name: 'egg',
        type: 'eggs',
        image: 'http://localhost:3000/images/icon/Egg.svg'
    },
    {
        name: 'jam',
        type: 'sweets',
        image: 'http://localhost:3000/images/icon/Jam.svg'
    },
    {
        name: 'chocolate',
        type: 'sweets',
        image: 'http://localhost:3000/images/icon/Chocolate.svg'
    },
    {
        name: 'sardine',
        type: 'fish',
        image: 'asd'
    },
    {
        name: 'salame',
        type: 'meat',
        image: 'http://localhost:3000/images/icon/Salame.svg'
    },
    {
        name: 'eggplant',
        type: 'vegetable',
        image: 'http://localhost:3000/images/icon/Eggplant.svg'
    },
    {
        name: 'carrot',
        type: 'vegetable',
        image: 'http://localhost:3000/images/icon/Carrot.svg'
    },
    {
        name: 'grapes',
        type: 'fruit',
        image: 'http://localhost:3000/images/icon/Grapes.svg'
    },
    {
        name: 'rice',
        type: 'cereals',
        image: 'asd'
    },
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