const express = require('express')
const todoRoutes = require('./routes/todo')

const app = express()
const PORT = 8080

app.use('/todos',todoRoutes)

app.listen(PORT,()=>{
    console.log(`Server listening at port: ${PORT}`)
})