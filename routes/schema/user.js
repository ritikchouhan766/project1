const mongoose=require('mongoose');

const userDBSchema =new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        min:5,
        max:64
    },
    last_name:{
        type:String,
        required:true,
        min:5,
        max:64
    },
    password:{
        type:String,
        required:true,
        min:5,
        max:128
    },
    number:{
        type:String,
        required:true,
        min:10,
        max:10
    },
    mail:{
        type:String,
        required:true,
        min:5,
        max:50
    }
    
});
/*
const queryschema =new mongoose.Schema({
    
    number:{
        type:String,
        required:true,
        min:10,
        max:10
    },
    mail:{
        type:String,
        required:true,
        min:5,
        max:50
    },
    query:{
        type:String,
        required:true,
        min:10,
        max:300
    }
});
*/

module.exports=mongoose.model("User",userDBSchema);
//module.exports=mongoose.model("query",queryschema);