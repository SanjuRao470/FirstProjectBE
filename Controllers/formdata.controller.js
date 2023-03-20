const User = require('../Models/users.model');


const findData = async (req,res) =>{
    const data= await User.find({})
    console.log(data)
    res.status(200).send(data)
    
 }

 module.exports={
    findData
 }