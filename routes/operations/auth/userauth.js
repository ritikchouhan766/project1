const router = require('express').Router();
//const pool = require("../../database");
const mongoose = require('mongoose');
const Users=require('./../../schema/user');
const sessions =require('./../../schema/sessions');
const dotenv = require('dotenv');
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

router.get('/', async (req, res) => {
    res.status(201).send(200);

});

router.post('/register', async (req, res) => {


    //validate using joi(schema)
    //const {error} = validation.val_user.validate(req.body);
    //res.send(error.details);
    //res.send(error.details[0].message);
    //if(error) return res.status(400).send(error.details[0].message);
    try{
        const new_user=new Users(
            {
                first_name:req.body.f_name,
                last_name:req.body.l_name,
                password:req.body.password,
                number  :req.body.number,
                mail    :req.body.mail

            });
    
            //console.log('before save');
            let saveUser = await new_user.save();
            res.send("user created sucessfully");
            
        }catch(err)
        {
            res.status(400).send( err );
        }

});

router.post('/login', async (req, res) => {
    const { mail, password } = req.body;
    if (!mail || !password) {
        return res.status(400).json({
          message: "mail or Password not present",
        });
      }
      else
      {
        try {
            const user = await Users.findOne({ mail, password })
            if (!user) {
              res.status(401).json({
                message: "Login not successful",
                error: "User not found",
              })
            } else {
                id=user._id;
                const new_sessions=new sessions(
                    {
                        id:id,
                        token:Math.random(00000000000000000000000000000000, 9999999999999999999999999999999999)
        
                    });
                    let saved_sessions = await new_sessions.save();
            res.send(saved_sessions.token);
                //res.send(id);

            }
          } catch (error) {
            res.status(400).json({
              message: "An error occurred",
              error: error.message,
            })
          }
      }
});



module.exports = router;