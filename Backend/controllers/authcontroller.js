/**
 * Authentication Controller
 * Handles user registration, login, retrieval, update, and deletion
 */

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { usermodel } = require('../models/usermodel');
const { schema } = require('../middleware/userschema');



/**
 * Register a new user
 * @async
 * @param {Object} req - Express request object containing username, email, password
 * @param {Object} res - Express response object
 * @returns {Object} - Created user object with success message
 */
exports.register = async (req, res) => {
    try {
        // Validate request body against schema
        const { error } = schema.validate(req.body)
        if (error) return res.status(400).json({ message: error.details[0].message })

        // Extract credentials from request
        const { username, email, password, phone } = req.body;
        // Hash password using bcrypt with 10 salt rounds
        const hashpassword = await bcrypt.hash(password, 10);
        // Create new user in database
        const user = await usermodel.create({ username, email, password: hashpassword, phone })
        return res.status(201).json({ message: "user registered successfully", user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }

}

/**
 * Authenticate user and generate JWT token
 * @async
 * @param {Object} req - Express request object containing email and password
 * @param {Object} res - Express response object
 * @returns {Object} - JWT token with success message
 */
exports.login = async (req, res) => {
    try {
        // Extract email and password from request
        const { email, password } = req.body;
        // Find user by email in database
        const user = await usermodel.findOne({
            where: {
                email
            }
        })
        // Verify password and user existence
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: "invalid email or password" })
        }
        // Generate JWT token with user id, valid for 1 hour
        const token = jwt.sign({ userid: user.id }, process.env.JWT_SECRET || "secretkey", { expiresIn: "1h" })
        return res.status(200).json({ message: "login successful", token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }

}

/**
 * Retrieve authenticated user information
 * Requires valid JWT token in request header
 * @async
 * @param {Object} req - Express request object with user from token
 * @param {Object} res - Express response object
 * @returns {Object} - User object
 */
exports.getuser = async (req, res) => {
    try {
        // Find user by primary key (id) extracted from JWT token
        const user = await usermodel.findByPk(req.user.userid)
        // Check if user exists
        if (!user) return res.status(404).json({ message: "user not found" })
        // Return user data
        return res.status(200).json(user)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

/**
 * Update user information
 * Allows updating username, email, and password
 * @async
 * @param {Object} req - Express request object with user credentials
 * @param {Object} res - Express response object
 * @returns {Object} - Updated user object with success message
 */
exports.update = async (req, res) => {
    try {
        // Validate request body against schema
        const { error } = schema.validate(req.body)
        if (error) res.status(401).json({ message: error.details[0].message })

        // Extract fields to update from request
        const { username, email, password, phone } = req.body;
        // Find user by id from JWT token
        const user = await usermodel.findByPk(req.user.userid)
        if (!user) res.status(401).json({ message: "user not found" })

        // Build update data object with only provided fields
        const updateData = {};
        if (username) updateData.username = username;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        // Hash new password if provided
        if (password) updateData.password = await bcrypt.hash(password, 10);

        // Update user in database
        await user.update(updateData)
        res.status(200).json({ message: "user updated successfully", user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

/**
 * Delete user account
 * Removes user from database
 * @async
 * @param {Object} req - Express request object with user from token
 * @param {Object} res - Express response object
 * @returns {Object} - Success message
 */
exports.deleteuser = async (req, res) => {
    try {
        // Find user by id from JWT token
        const user = await usermodel.findByPk(req.user.userid)
        // Check if user exists
        if (!user) res.status(401).json({ message: "user not found" })

        // Delete user from database
        await user.destroy()
        res.status(200).json({ message: "user deleted successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

    ;