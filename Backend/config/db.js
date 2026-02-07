const { Sequelize } = require('sequelize');
// Add explicit require for mysql2 to ensure it's bundled by Vercel
require('mysql2');

/**
 * Database Configuration
 * Establishes connection to MySQL database using Sequelize ORM
 */

// Use environment variables for database connection
const sequelize = new Sequelize(
    process.env.DB_NAME || 'khan',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'root',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: "mysql",
        // Additional options for production/Vercel compatibility
        dialectModule: require('mysql2'),
        logging: false
    }
)

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
module.exports = { db, sequelize }
