const mongoose = require('mongoose');
const Ingredient = require('./models/ingredient');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost/fridgeat');


const ingredients = [
    {
        name: 'pepper',
        type: 'vegetable',
        image: '/images/icon/Pepper.svg'
    },
    {
        name: 'lettuce',
        type: 'vegetable',
        image: '/images/icon/Lettuce.svg'
    },
    {
        name: 'bread',
        type: 'cereals',
        image: '/images/icon/Sandwich.svg'
    },
    {
        name: 'cheese',
        type: 'dairy',
        image: '/images/icon/Cheese.svg'
    },
    {
        name: 'chicken',
        type: 'meat',
        image: '/images/icon/Chicken.svg'
    },
    {
        name: 'watermelon',
        type: 'fruit',
        image: '/images/icon/Watermelon.svg'
    },
    {
        name: 'lemon',
        type: 'fruit',
        image: '/images/icon/Lemon.svg'
    },
    {
        name: 'steak',
        type: 'meat',
        image: '/images/icon/Steak.svg'
    },
    {
        name: 'milk',
        type: 'dairy',
        image: '/images/icon/Milk.svg'
    },
    {
        name: 'egg',
        type: 'eggs',
        image: '/images/icon/Egg.svg'
    },
    {
        name: 'jam',
        type: 'sweets',
        image: '/images/icon/Jam.svg'
    },
    {
        name: 'chocolate',
        type: 'sweets',
        image: '/images/icon/Chocolate.svg'
    },
    {
        name: 'sardine',
        type: 'fish',
        image: '/images/icon/Fish.svg'
    },
    {
        name: 'salame',
        type: 'meat',
        image: '/images/icon/Salame.svg'
    },
    {
        name: 'eggplant',
        type: 'vegetable',
        image: '/images/icon/Eggplant.svg'
    },
    {
        name: 'carrot',
        type: 'vegetable',
        image: '/images/icon/Carrot.svg'
    },
    {
        name: 'grapes',
        type: 'fruit',
        image: '/images/icon/Grapes.svg'
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