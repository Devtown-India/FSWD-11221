const http = require('http')


const server = http.createServer((req,res)=>{
    res.write('hi from the server')
    res.end()
})

server.listen(8080)