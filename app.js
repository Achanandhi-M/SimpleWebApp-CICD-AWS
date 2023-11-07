const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import route modules
const defaultRoute= require('./routes/default')
const route1 = require('./routes/route1');
const route2 = require('./routes/route2');

// Define route handler
app.use('/',defaultRoute);
app.use('/route1', route1);
app.use('/route2', route2);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
