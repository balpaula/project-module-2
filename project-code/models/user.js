const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    diet: { type: String, enum: ['vegetarian', 'vegan', 'standard'] },
    fridge: Array

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;