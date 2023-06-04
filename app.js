const express = require('express');
const app = express();

// Define a route that returns a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.random();
  res.json({ number: randomNumber });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});