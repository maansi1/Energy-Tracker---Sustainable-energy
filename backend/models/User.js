const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // 'unique' prevents duplicate accounts
    password: { type: String, required: true }, // You MUST have this to save passwords
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);