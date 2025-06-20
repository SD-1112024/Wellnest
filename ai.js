const express = require('express');
const router = express.Router();

// Sample short replies
const responses = [
    "You're not alone. I'm here for you 💚",
    "Take a deep breath, you're doing your best 🌿",
    "It's okay to feel overwhelmed — you matter 🤍",
    "Progress is progress, no matter how small 🌱",
    "You are strong. Keep going 💪",
    "Even the darkest nights end with sunrise ☀"
];

router.post('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    const botReply = responses[randomIndex];
    res.json({ response: botReply });
});

module.exports = router;