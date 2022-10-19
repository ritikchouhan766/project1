const mongoose=require('mongoose');

const sessions =new mongoose.Schema({
    
    id:{
        type:String,
        required:true,
        min:2,
        max:100
    },
    token:{
        type:String,
        required:true,
        min:32,
        max:32
    }
    
});

module.exports=mongoose.model("sessions",sessions);