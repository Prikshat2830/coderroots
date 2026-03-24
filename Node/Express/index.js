const express = require("express")

const app = express()

// const port = 2000

require("dotenv").config()

const port = process.env.PORT


app.get("/", (req, res)=>{
    res.send("Hello world I'm here")
})

app.listen(port,()=>{
    console.log("Server is running ",port);
    
})