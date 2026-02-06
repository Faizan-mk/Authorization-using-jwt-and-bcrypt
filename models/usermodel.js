const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");


 exports.usermodel=sequelize.define("users",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
       
    }
 },
{
    timestamps:false
})