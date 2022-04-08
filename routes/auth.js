const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const SECRET = 'TOp_Secret_code'


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
            expiresIn:30
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