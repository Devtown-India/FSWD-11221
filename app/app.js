const express = require('express')
const app = express()
const PORT = 8080


app.use(express.json())

const users = []

const isValidUser = (req, res, next) => {

    const { user } = req.body

    if (!user) return res.json({
        user: null,
        message: "User can not be null",
        success: false,
    })

    if (users.includes(user)) return res.json({
        user: null,
        message: "User already exists",
        success: false,
    })

    return next()
}

app.get('/users', (req,res)=>{
    try {
        res.json({
            users,
            message:"Users fetched",
            success:true,
        })
    } catch (error) {
        console.log(error)
        res.json({
            users:[],
            message: "Error getting the users",
            success: false,
        })
    }
})

app.post('/users', isValidUser ,(req, res) => {
    try {
        const {user} = req.body
        users.push(user)
        return res.json({
            user,
            message: "User added",
            success: true,
        })
      
    } catch (error) {
        console.log(error)
        res.json({
            user:null,
            message: "failed to add user",
            success: false,
        })
    }
})

module.exports = {
    users
}


app.listen(PORT,()=>{
    console.log(`Express server listening at port ${PORT}`)
})