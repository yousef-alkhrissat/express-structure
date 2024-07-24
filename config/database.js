const { Sequelize } = require('sequelize');
require('dotenv').config(); // For environment variables
// Create a Sequelize instance with your database configuration
const sequelize = new Sequelize("mysql://root:@localhost:3306/mycardb", {
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
  logging: false, // Set to true to see SQL queries in the console
  define: {
    timestamps: false, // Disable automatic creation of createdAt/updatedAt fields
  },
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
