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

// Initialize database connection
const initDB = async () => {
  try {
    await db();
    await usermodel.sync({ force: false });
    console.log("Database synchronized");
  } catch (error) {
    console.error("Database synchronization failed:", error);
  }
};

// Start the Express server only when running locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, async () => {
    console.log(`server is listening on port ${port}`)
    await initDB();
  })
} else {
  // In production (Vercel), we still need to initialize the DB
  // Serverless functions are stateless, but we can call initDB
  initDB();
}

// Export the app for Vercel serverless functions
module.exports = app;
