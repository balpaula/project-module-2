const mongoose = require('mongoose');

const Schema = mongoose.schema;

const ingredientSchema = new Schema({
    name: String,
    type: String,
    quantity: Number,
    image: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;