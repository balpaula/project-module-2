const mongoose = require('mongoose');

const Schema = mongoose.schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    diet: { type: String, enum: ['vegetarian', 'vegan', 'standard']},
    fridge: Array

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;