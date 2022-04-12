const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const jwt = require('jsonwebtoken') 
const Todo = require('../services/mongodb/models/Todo')

const router = express.Router()

const dbPath = path.join(path.resolve(),'/data/data.json')


/*
TYPE: POST
DESCRIPTION: Route to add a Todo Item
BODY: {
    text,
}
*/

router.post('/', async (req,res)=>{
    try {
        const { text } = req.body
        if(text){
        
            const todo = new Todo({
                text,
                isPending:true,
                date: Date.now(),
            })

            await todo.save()
       
            return res.json({
                todo,
                message: "Todo added",
                success: true
            })
        }
        return res.json({
            todo:null,
            message: "Todo can not be empty",
            success: false
        })
    } catch (error) {
        console.log(error)
        return res.json({
            todo:null,
            message: error.message,
            success: false
        })
    }
})


/*
TYPE: GET
DESCRIPTION: Route to get all Todo Items
BODY: null
*/
const SECRET = 'TOp_Secret_code'

router.get('/', async (req, res) => {
    try {
            
        const todos = await Todo.find({})
                return res.json({
                    todos,
                    message: "todos fetched successfully",
                    success: true
                })
      
      
       
    } catch (error) {
        console.log(error)
        return res.json({
            todos: [],
            message: error.message,
            success: false
        })
    }
})

/*
TYPE: DELETE
DESCRIPTION: Route to delete a Todo Item
BODY: null
PARAMS: ID
*/
router.delete("/:id", async (req, res) => {
    try {   
        const {id} = req.params
        const todo = await Todo.findOneAndDelete({_id:id})
        res.json({
            todo:null,
            message: "todo deleted successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.json({
            todo: null,
            message: error.message,
            success: false
        })
    }
});

module.exports = router