// 1. Import Express
// 1. Import Express
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define the port the server will run on
const PORT = process.env.PORT || 3000;

// 4. Define a basic route
// This handles GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World! Your Express server is running. 🚀');
});

// 5. Start the server and listen for connections
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});onst express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define the port the server will run on
const PORT = process.env.PORT || 3000;

// 4. Define a basic route
// This handles GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World! Your Express server is running. 🚀');
});

// 5. Start the server and listen for connections
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
