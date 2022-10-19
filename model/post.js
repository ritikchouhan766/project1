const mongoose=require('mongoose');

const userDBSchema1 =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:2,
        max:200
    },
    password:{
        type:String,
        required:true,
        min:2,
        max:128
    }
});


module.exports=mongoose.model('User1',userDBSchema1);