const mongoose=require('mongoose');


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


module.exports=mongoose.model("Query",queryschema);