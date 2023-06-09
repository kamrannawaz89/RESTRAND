const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Define a route that returns a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.random();
  res.json({ number: randomNumber });
});


// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle the API request
app.post('/api/range', (req, res) => {
  const { min, max } = req.body; // Assuming the range is passed as JSON data in the request body
  
  if (min && max) {
    // Validating input values
    const startNum = parseInt(min);
    const endNum = parseInt(max);

    if (Number.isNaN(startNum) || Number.isNaN(endNum)) {
      res.status(400).json({ error: 'Invalid range values. Please provide numeric values.' });
    } else {
      // Process the range and return the result
      const result = getRandomNumber(startNum, endNum);
      res.json({ result });
    }
  } else {
    res.status(400).json({ error: 'Invalid request. Please provide both start and end values.' });
  }
});


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});