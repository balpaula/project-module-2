const mongoose = require('mongoose');
const Ingredient = require('../models/ingredient');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    diet: { type: String, enum: ['vegetarian', 'vegan', 'standard'] },
    fridge: [Ingredient.schema],
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;