const path = require('path')
// resolve give the root
// console.log(__dirname+'/app.js')
const absolutePath = '/Users/kartikgupta/Desktop/FSWD-11221/index.js'
const relativePath = '../index.js'

// console.log(path.isAbsolute(relativePath))
const current = __dirname
const target = path.join(path.resolve(),'index.js')

console.log(path.parse(current))

