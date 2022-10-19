//const Joi = require('joi');
const mongoose=require('mongoose');

const userDBSchema =new mongoose.Schema({
    username:{
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
    }
});



module.exports=mongoose.model("User",userDBSchema);
//module.exports=mongoose.model('User',userDBSchema);

//var User = mongoose.model("User", userDBSchema);
//app.UserSchema = UserSchema = mongoose.model('UserSchema'); 