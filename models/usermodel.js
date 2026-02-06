/**
 * User Model Definition
 * Defines the User table schema using Sequelize ORM
 */

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

/**
 * User Model
 * Defines the users table with username, email, and password fields
 */
exports.usermodel=sequelize.define("users",{
    // Username field - required string
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    // Email field - required string with unique constraint
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    // Password field - required string (should be hashed)
    password:{
        type:DataTypes.STRING,
        allowNull:false,
       
    }
 },
{
    // Disable automatic timestamps (createdAt, updatedAt)
    timestamps:false
})