/**
 * User Data Validation Schema
 * Defines validation rules for user input using Joi
 */

const Joi = require('joi');

/**
 * User schema for validation
 * Validates username, email, and password fields
 */
exports.schema = Joi.object({
    // Username must be a non-empty string
    username: Joi.string().required(),
    // Email must be a valid email format and required
    email: Joi.string().email().required(),
    // Password must be a non-empty string
    password: Joi.string().required(),
    // Phone must be a string (optional)
    phone: Joi.string().optional()
})