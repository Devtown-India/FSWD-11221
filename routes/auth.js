const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()


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

        res.json({
            todos,
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