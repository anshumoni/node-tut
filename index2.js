const express = require("express")
const app = express()

const filtereq = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age to proceed")
    }else{
        next();
    }
    
}

app.use(filtereq);

app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.get("/about",(req,res)=>{
    res.send("This is about us page")
})
app.listen(5000)
