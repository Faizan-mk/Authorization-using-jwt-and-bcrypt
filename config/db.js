/**
 * Database Configuration
 * Establishes connection to MySQL database using Sequelize ORM
 */

const { Sequelize } = require('sequelize');

// Initialize Sequelize with MySQL connection details
const sequelize = new Sequelize('khan', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql"
})

/**
 * Authenticate database connection
 * @async
 * @function db
 * @returns {Promise} - Resolves when connection is authenticated
 */
const db = async (req, res) => {
    try {
        // Test the database connection
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Export database connection and sequelize instance
module.exports={db,sequelize}