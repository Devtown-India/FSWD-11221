const mongoose = require('mongoose')
// !TODO add this string to env file
const DB_URI = 'mongodb+srv://kartik:kartik123@class.sujvt.mongodb.net/todo'

const connectDB = async ()=>{
    try {
       await mongoose.connect(DB_URI)
       console.log("Connected to the DB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectDB
}