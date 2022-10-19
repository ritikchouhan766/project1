const Joi =require('@hapi/joi');
const router = require('../auth/userauth');


const val_user = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required()
});


//module.exports = router;
module.exports.val_user=val_user;

