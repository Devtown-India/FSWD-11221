const path = require('path')
// ! resolve will return the root
// console.log(path.resolve())
// console.log(__dirname)

// console.log(path.extname('app.js'))

const absolutePath = __dirname
const relativePath = '../'

console.log(path.isAbsolute(absolutePath))
console.log(path.isAbsolute(relativePath))