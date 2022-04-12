const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../services/mongodb/models/User')
const bcrypt = require('bcryptjs')

const SECRET = 'TOp_Secret_code'


/*
TYPE: POST
DESCRIPTION: Route to signup a user
BODY: {
    email,
    password,
    name,
}
*/

router.post('/signup', async (req, res) => {
    try {
        const { email, password ,name} = req.body

        const salt = await bcrypt.genSalt(5)
        const hashedPassword = await bcrypt.hash(password,salt)
        console.log(hashedPassword)

        const user = new User({
            email, password:hashedPassword, name
        })

        await user.save()

        res.json({
            user,
            message: "token created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.json({
            token: null,
            message: error.message,
            success: false
        })
    }
})


/*
TYPE: POST
DESCRIPTION: Route to login a user
BODY: {
    email,
    password
}
*/

router.post('/',async(req,res)=>{
    try {
        const {email,password} = req.body
        console.log({ email, password })

        const token = jwt.sign({
            email
        },SECRET,{
            expiresIn:30000
        })

        res.json({
            token,
            message: "token created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.json({
            token: null,
            message: error.message,
            success: false
        })
    }
})


/*
TYPE: GET
DESCRIPTION: Route to VERIFY YOUR TOKEN 
BODY:null
params:token
*/

router.get('/:token', async (req, res) => {
    try {
        const { token } = req.params

        const isVerified = jwt.verify(token,SECRET)

        if (isVerified) return res.json({
            status:"Token verified YAY",
            message: "token created successfully",
            success: true
        })

        return res.json({
            status: "Invalid token NAY",
            message: "token created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.json({
            token: null,
            message: error.message,
            success: false
        })
    }
})

module.exports = router