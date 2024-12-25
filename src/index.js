const express = require('express');
const app = express();

const basicAuth = require('./auth.js');

// Apply the middleware
app.use(basicAuth);

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
