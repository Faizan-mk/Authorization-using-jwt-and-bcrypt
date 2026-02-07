/**
 * Main Application Entry Point
 * Initializes Express server with authentication routes and database synchronization
 */

const express = require('express')
const { db } = require('./config/db')
const { authrouter } = require('./routes/authrouter')
const { usermodel } = require('./models/usermodel')
const app = express()
const port = 3000

// Middleware to parse incoming JSON requests
app.use(express.json())

// Mount authentication routes at /api prefix
app.use("/api", authrouter)

// Start the Express server
app.listen(port, async () => {
  console.log(`server is listening on port ${port}`)
  // Initialize database connection
  await db();
  // Synchronize Sequelize models with database
  await usermodel.sync({ force: false });
  console.log("user table synchronized")
})
