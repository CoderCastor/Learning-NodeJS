const express = require("express");
const app = express();
const mongoose = require('mongoose')
const User = require("./models/userModel")

// mongoose.connect("mongodb+srv://cetcracknoway:5AXlI43Jy7HcfadP@test-project-db.3njfp.mongodb.net/?retryWrites=true&w=majority&appName=test-project-db")


const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://tejasshinde935:cpbBQopoK3NTM2ui@castor.fpllo.mongodb.net/?retryWrites=true&w=majority&appName=castor");
    console.log(`The is connected with ${mongoose.connection.host}`);
    
}

connectDB();


async function insert(){
    await User.create({
        name: "Sandeep",
        email:"sandeep@gmail.com"
    })
}

insert();

app.get("/",(req,res)=>{
    res.send("Hello From Backend")
})

app.listen(3000, ()=>{
    console.log("Server is running");
    
})

//tejasshinde935
//cpbBQopoK3NTM2ui

//mongodb+srv://tejasshinde935:cpbBQopoK3NTM2ui@castor.fpllo.mongodb.net/?retryWrites=true&w=majority&appName=castor

