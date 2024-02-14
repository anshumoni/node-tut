const express = require("express")
const app = express();

const checkauth = (req,res,next)=>{
    if(!req.query.auth){
        res.send("Please login before proceed")
    }else{
        next()
    }
}

module.exports = checkauth;
