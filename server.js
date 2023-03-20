const express=require("express");
const app=express()
const {findData} =require("./Controllers/formdata.controller");
const cors = require('cors');
const mongoose = require('mongoose');
const formDataRouter=require("./Routes/formData.router");


(()=>{
    reqConfig();
    routesConfig();
})();


function reqConfig(){
    app.use(cors());
app.use(express.json());
}


mongoose.connect("mongodb+srv://sanju:sanju%40123@cluster0.nrpylpw.mongodb.net/ProductData?retryWrites=true&w=majority",

        console.log("Database connected successfully")

);

// app.get('/findData',findData)


function routesConfig(){
app.use('/',formDataRouter)
}


module.exports=app


