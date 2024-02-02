// Importing necessary modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js app running on port 9000!');
});

// Start the server on port 9000
const PORT = 9001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
