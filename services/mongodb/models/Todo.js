const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    isPending:{
        type:Boolean,
        default:false
    },
    date:{
        type: Date,
        default:Date.now()
    }
},{
    timestamps:true
})

const Todo = new mongoose.model("Todo",TodoSchema)

module.exports = Todo