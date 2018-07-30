const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    level: Array,
    time: Number,
    ingredients: Array,
    description: Array,
    image: String,
    source: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;