// Import required modules
const express = require('express');

// Create an instance of express
const app = express();

// Define credentials object
const credV = {
  "companyName": "KL University",
  "clientID": "a70efa9c-453c-44a9-94c6-6b7f81692cc2",
  "clientSecret": "cbZLghmBWSedtTvt",
  "ownerName": "Javvadi Sai Bhagavan",
  "ownerEmail": "2100032454cseh@gmail.com",
  "rollNo": "2100032454"
};

// Define a route to serve the credentials
app.get('/api/credentials', (req, res) => {
  res.json(credV);
});

// Define a default route for handling other requests
app.get('*', (req, res) => {
  res.send('Invalid endpoint. Use /api/credentials to get credentials.');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
