const express = require('express');
const User = require('../models/User');
const router = express.Router();

//Create User using Post:  "api/auth/ Doesnt require auth"
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send("hello");
})

module.exports = router;