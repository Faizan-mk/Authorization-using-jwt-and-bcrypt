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

// Synchronize Sequelize models with database
// force: true will drop and recreate the table on each server restart
usermodel.sync({force:true}).then(()=>{
    console.log("user table created")
}).catch(err=>{
    console.log("error creating user table",err)
})

// Middleware to parse incoming JSON requests
app.use(express.json())

// Mount authentication routes at /api prefix
app.use("/api",authrouter)

// Start the Express server
app.listen(port, async() => {
  console.log(`server is listening on port ${port}`)
  // Initialize database connection
  await db();
})
