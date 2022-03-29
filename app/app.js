const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req,res)=>{

    switch(req.url){
        case "/page":
            res.writeHead(200, {
                'Content-Type': "text/html"
            })
            const contents = fs.readFileSync(path.join(path.resolve(), '/public/index.html'), { encoding: "UTF-8" })

            res.write(contents)
            return res.end()

        case "/ping":
            res.write('PONG')
            return res.end()

        case "/todos":
            res.writeHead(200, {
                'Content-Type': "text/json"
            })
            const data = fs.readFileSync(path.join(path.resolve(), '/public/data.json'), { encoding: "UTF-8" })
            res.write(data)

        case "/image":
            res.writeHead(200, {
                'Content-Type': "image/jpeg"
            })
            const image = fs.readFileSync(path.join(path.resolve(), '/public/saudiGP.jpg'))
            res.write(image)

        default:
            res.write('the default case')
            return res.end()

    }
 
})

server.listen(8080)