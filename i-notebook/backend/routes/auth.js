const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'GauravPKad';

//Create User using Post:  "api/auth/createUser -----> No Login"
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Check if email already exist
    let user = await User.findOne({ email: req.body.email });

    try {
        if (user) {
            return res.status(400).json({ errpr: 'Email with this Email Already Exists !!' })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);

        //Create new User
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json(authtoken);
        


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/auth.js")
    }

})

module.exports = router;