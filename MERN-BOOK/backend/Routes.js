const express = require("express");
const Router = express.Router();

Router.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Server is running fine on get"
    })

})

Router.post("/",(req,res)=>{
    res.status(200).json({
        msg:"Server is running fine on post"
    })
    
})

Router.put("/:id",(req,res)=>{
    const id = req.params.id
    res.status(200).json({
        msg:`Server is running fine put ${id}`
    })

})

Router.delete("/:id",(req,res)=>{
    const id = req.params.id
    res.status(200).json({
        msg:`Server is running fine delete ${id}`
    })

})

module.exports = Router