const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const authenticateToken = require('./events/authMiddleware');

const app = express();
const PORT = process.env.PORT || 8080;


app.get('/events', authenticateToken, (req, res) => {
    // Handle the authenticated request to /events
    // Only authenticated users with a valid JWT token will reach this point
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Mock database user
const mockUser = {
    id: 1,
    email: 'example@example.com',
    password: '1234' // Hashed password: 'password'
};

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password match the mock user
    if (email === mockUser.email && bcrypt.compareSync(password, mockUser.password)) {
        // Generate a JWT token
        const token = jwt.sign({ userId: mockUser.id }, 'your-secret-key', { expiresIn: '30m' });

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Serve the built Vue.js application
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all requests and serve the Vue.js application's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});