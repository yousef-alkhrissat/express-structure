const express = require('express');
const { sequelize } = require('./models'); // Import your Sequelize instance
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config(); // For environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan('dev')); // Logging HTTP requests

// Routes

// Sync the database
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
