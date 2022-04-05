const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const router = express.Router()

const dbPath = path.join(path.resolve(),'/data/data.json')


/*
TYPE: POST
DESCRIPTION: Route to add a Todo Item
BODY: {
    text,
}
*/

router.post('/',(req,res)=>{
    try {
        const { text } = req.body
        const todos = JSON.parse(fs.readFileSync(dbPath))
        if(text){
            const todo = {
                id: uuidv4(),
                text,
                isPending: true,
                date: Date.now()
            }
            todos.push(todo)
            fs.writeFileSync(dbPath,JSON.stringify(todos))
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
router.get('/', (req, res) => {
    try {

        const todos = JSON.parse(fs.readFileSync(dbPath))
        res.json({
            todos,
            message:"todos fetched successfully",
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
router.delete("/:id", (req, res) => {
    try {   
        const {id} = req.params
        const todos = JSON.parse(fs.readFileSync(dbPath))
        fs.writeFileSync(dbPath, JSON.stringify(todos.filter(todo=>todo.id!=id)))
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