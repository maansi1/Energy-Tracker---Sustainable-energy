const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Message = require('../models/Message');
const Newsletter = require('../models/Newsletter'); // Import the new model

// NEWSLETTER SIGNUP
router.post('/newsletter', async (req, res) => {
    try {
        const newSignup = new Newsletter({ email: req.body.email });
        await newSignup.save(); //
        res.status(201).json({ message: "Subscribed successfully!" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "Email already subscribed." });
        }
        res.status(400).json({ error: err.message });
    }
});

// CONTACT FORM
router.post('/contact', async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(201).json({ message: "Message sent!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered!" });
    } catch (err) {
        res.status(400).json({ error: "Email already exists." });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(200).json({ username: user.username, email: user.email });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;