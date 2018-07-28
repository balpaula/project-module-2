const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    level: Number,
    time: Number,
    ingredients: Array,
    description: String,
    image: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;