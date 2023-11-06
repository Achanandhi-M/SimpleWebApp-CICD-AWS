const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import route modules
const route1 = require('./routes/route1');
const route2 = require('./routes/route2');

// Define route handlers
app.use('/route1', route1);
app.use('/route2', route2);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
