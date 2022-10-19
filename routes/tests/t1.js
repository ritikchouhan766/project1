const router =require('express').Router();
const pool = require("../../database");
const dotenv=require('dotenv');
dotenv.config();

//const validation=require('../validation');
//const {val_user}=require('../validation');

/*
const Joi =require('@hapi/joi');

//joi validation schema
const val_user = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required()
});
*/


router.post('/register',async(req,res)=>{
   name_id1="", address_id1="", contact_id1="";
    const name_data={
        f_name:    req.body.f_name,
        mid_name:  req.body.mid_name,
        last_name: req.body.last_name
    };
    const address_data={
        ad1:      req.body.ad1,
        ad2:      req.body.ad2,
        loc_id:   req.body.loc_id
    };
    const contact_data={
        code:     req.body.code,
        num:      req.body.num,
        num_verify:   req.body.num_verify,
        mail:      req.body.mail,
        mail_verify:   req.body.mail_verify
    };
    
    
    try{
        async function test1() {
            var results= await pool.query("INSERT INTO nameinfo set ?" ,name_data,(error, results, fields)=>
        {
            global.name_id1="1";
            process.env.name_id=JSON.stringify(results.insertId);
            //name_id1=String(results.insertId);
            //name_id1= JSON.stringify(results.insertId);
            //name_id1 = results.insertId;
            //console.log(name_id1);
            //process.env.name_id=1;
            console.log(name_id1);
            //res.send(name_id1).status(200);
        });
        }
        test1(); 
        name_id1= JSON.stringify(results.insertId);
        console.log(name_id1);
        async function test2() {
            pool.query("INSERT INTO address_info set ?" ,address_data,(error, results, fields)=>
        {
            //address_id1 = results.insertId;
            address_id1 =JSON.stringify(results.insertId);
            console.log(address_id1);

        
        });
        }
        
        pool.query("INSERT INTO contact_info set ?" ,contact_data,(error, results, fields)=>
        {
            //contact_id1 = results.insertId;
            
            contact_id1 =JSON.stringify(results.insertId);
            console.log(contact_id1);
            
        });

         const user_data={
            name_id:      name_id1,
            address_id:    "1",
            con_info_id:   global.name_id1
        };

        pool.query("INSERT INTO user set ?" ,user_data,(error, results, fields)=>
        {
            //var res1 = results.insertId;
            var res1 = JSON.stringify(user_data);
            console.log(res1);
            res.send(results);
        });
        
        }catch(err)
        {
            res.status(400).send( err );
        }
        //console.log('before save');
 
});

module.exports=router;