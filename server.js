const express = require('express')
const cors = require('cors')
const todoRoutes = require('./routes/todo')
const authRoutes = require('./routes/auth')


const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use('/todos',todoRoutes)
app.use('/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server listening at port: ${PORT}`)
})