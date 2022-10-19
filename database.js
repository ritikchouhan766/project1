const mongoose = require('mongoose');
const router = require('express').Router();

mongoose.connect(process.env.DB_CONNECTION,()=>
console.log("connected to DB")
);

module.exports = router;