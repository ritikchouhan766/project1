const router = require('express').Router();
//const pool = require("../../database");
const Query=require('./../../schema/query');
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

router.post('/', async (req, res) => {


    //validate using joi(schema)
    //const {error} = validation.val_user.validate(req.body);
    //res.send(error.details);
    //res.send(error.details[0].message);
    //if(error) return res.status(400).send(error.details[0].message);
    try{
        const new_query=new Query(
            {
                
                query   :req.body.query,
                number  :req.body.number,
                mail    :req.body.mail

            });
        
            
            //console.log('before save');
            let savequery = await new_query.save();
            res.send("query saved successfully");
            
        }catch(err)
        {
            res.status(400).send( err );
        }

});

router.post('/login', async (req, res) => {
    res.status(200);
});



module.exports = router;