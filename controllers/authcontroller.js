const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { usermodel } = require('../models/usermodel');



exports.register = async (req, res) => {
    try {
       const {username,email,password}=req.body;
       const hashpassword=await bcrypt.hash(password,10);
       const user=await usermodel.create({username,email,password:hashpassword})
       res.status(201).json({message:"user registered successfully",user})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }

}

exports.login = async (req, res) => {
    try {
    const{email,password}=req.body;
    const user=await usermodel.findOne({
        where:{
            email
        }
    })
    if(!user ||!await bcrypt.compare(password,user.password)){
        res.status(401).json({message:"invalid email or password"})
    }
    const token=jwt.sign({userid:user.id},"secretkey",{expiresIn:"1h"})
    res.status(200).json({message:"login successful",token})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }

}

exports.getuser = async (req, res) => {

    try {
        const user=await usermodel.findByPk(req.user.userid)
    if(!user) res.status(401).json({message:"user  not found"})
        res.status(401).json(user)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}