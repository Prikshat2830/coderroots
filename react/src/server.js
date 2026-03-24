const express = require("express")

const app = express()

app.post("/",function(req, res){
    res.send("Hello Master, WELCOME BACK")
})

app.listen(5173, function(){
    console.log("Server is happening...");
    
})