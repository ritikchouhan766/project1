const express = require('express');
var compression = require('compression');
const app = express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');

//use
app.use(express.json());
app.use(cors());
app.use(compression());

//names
//routes

//auth
const authRoute =require('./routes/operations/auth/userauth');
const queryRoute =require('./routes/operations/query/query');

//routes 
//remote address
//app.use("/api/users",userRoter);
app.use("/user",authRoute);
app.use("/query",queryRoute);



//test



mongoose.connect(process.env.DB_CONNECTION,()=>
console.log("connected to DB")
);



//local
/*
app.get('/',(req,res)=>{
    res.send('we are on /');
});
*/
    


//server 
app.listen(3000);