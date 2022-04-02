const {users} = require('../app/app')


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

module.exports = {
    isValidUser
}