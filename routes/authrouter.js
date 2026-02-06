/**
 * Authentication Routes
 * Defines API endpoints for user authentication and account management
 */

const express= require('express');
const { register, login, getuser, update, deleteuser } = require('../controllers/authcontroller');
const { verifytoken } = require('../middleware/authmiddlware');
const authrouter=express.Router();

// POST /register - Register a new user
authrouter.post('/register',register)

// POST /login - Authenticate user and receive JWT token
authrouter.post('/login',login)

// GET /getuser - Get authenticated user information (requires valid JWT token)
authrouter.get('/getuser', verifytoken, getuser)

// PUT /updateuser - Update user information (requires valid JWT token)
authrouter.put('/updateuser', verifytoken, update)

// DELETE /deleteuser - Delete user account (requires valid JWT token)
authrouter.delete('/deleteuser', verifytoken, deleteuser)

// Export router for use in main app
module.exports={authrouter}
