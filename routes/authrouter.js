const express= require('express');
const { register, login, getuser } = require('../controllers/authcontroller');
const { verifytoken } = require('../middleware/authmiddlware');
const authrouter=express.Router();

authrouter.post('/register',register)
authrouter.post('/login',login)
authrouter.get('/getuser', verifytoken, getuser)


module.exports={authrouter}
