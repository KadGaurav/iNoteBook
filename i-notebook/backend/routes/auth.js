const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'GauravPKad';

//ROUTE 1: Create User using POST:  "api/auth/createUser -----> No Login" ----------------------------------------->>

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
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Create new User
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json(authtoken);



    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/auth ROUTE 1.js");
    }

})


//ROUTE 2: Authenticate User using POST:  "api/auth/login -----> No Login" ----------------------------------------->>
router.post('/login', [
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Try with correct credentials' });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Try with correct credentials' });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json(authtoken);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/auth ROUTE 2.js");
    }
})

//ROUTE : Get Logged in User Details POST:  "api/auth/getuser ----->Login Required " --------------------##use middleware(fetchuser)--------------------->>
router.post('/getuser',fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error in routes/auth ROUTE 3.js");
    }
})


module.exports = router;