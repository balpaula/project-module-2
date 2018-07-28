const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fridgeat');

const Ingredient = require('../models/ingredient');

const ingredients = [
    {
        name: 'pepper',
        type: 'vegetable',
        image: 'asd'
    },
    {
        name: 'lettuce',
        type: 'vegetable',
        image: 'asd'
    },
    {
        name: 'bread',
        type: 'cereals',
        image: 'asd'
    },
    {
        name: 'cheese',
        type: 'dairy',
        image: 'asd'
    },
    {
        name: 'chicken',
        type: 'meat',
        image: 'asd'
    },
    {
        name: 'watermelon',
        type: 'fruit',
        image: 'asd'
    },
    {
        name: 'lemon',
        type: 'fruit',
        image: 'asd'
    },
    {
        name: 'cookies',
        type: 'sweets',
        image: 'asd'
    },
    {
        name: 'steak',
        type: 'meat',
        image: 'asd'
    },
    {
        name: 'milk',
        type: 'dairy',
        image: 'asd'
    },
    {
        name: 'egg',
        type: 'eggs',
        image: 'asd'
    },
    {
        name: 'bread',
        type: 'cereals',
        image: 'asd'
    },
    {
        name: 'jam',
        type: 'sweets',
        image: 'asd'
    },
    {
        name: 'chocolate',
        type: 'sweets',
        image: 'asd'
    },
    {
        name: 'sardine',
        type: 'fish',
        image: 'asd'
    },
    {
        name: 'salami',
        type: 'meat',
        image: 'asd'
    },
    {
        name: 'eggplant',
        type: 'vegetable',
        image: 'asd'
    },
    {
        name: 'carrot',
        type: 'vegetable',
        image: 'asd'
    },
    {
        name: 'grape',
        type: 'fruit',
        image: 'asd'
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