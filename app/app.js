const fs = require('fs')
const path = require('path')

const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello world</h1>
</body>
</html>
`


// fs.renameSync(
//     path.join(__dirname, 'welcome.js'),
//     path.join(__dirname, 'welcome.html'))


fs.readFile(path.join(__dirname, 'welcome.html'),{encoding:'utf8'},(err,data)=>{
    console.log(data)
})

console.log('hi')


fs.rm(path.join(__dirname, 'welcome.html'),(err)=>{
    console.log(err)
})