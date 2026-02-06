const express = require('express')
const { db } = require('./config/db')
const { authrouter } = require('./routes/authrouter')
const { usermodel } = require('./models/usermodel')
const app = express()
const port = 3000


usermodel.sync({force:true}).then(()=>{
    console.log("user table created")
}).catch(err=>{
    console.log("error creating user table",err)
})
app.use(express.json())
app.use("/api",authrouter)

app.listen(port, async() => {
  console.log(`server is listening on port ${port}`)
  await db();
})
