const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Express Server");
});

// Contact route
app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

// Help route
app.get('/help', (req, res) => {
    res.send("Help Page");
});

// API route returning JSON
app.get('/api/user', (req, res) => {
    res.json({
        name: "Nihar",
        course: "AIML",
        college: "Example College"
    });
});

// 404 route
app.use((req, res) => {
    res.status(404).send("404 Page Not Found");
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});