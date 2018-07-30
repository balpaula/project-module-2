const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fridgeat');

const Recipe = require('../models/recipe');

const recipes = []

Recipe.create(recipes)
    .then((data) => {
        console.log('ok');
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(error);
        mongoose.connection.close();
    });

    