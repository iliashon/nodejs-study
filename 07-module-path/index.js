const path = require('path');

const filePath = '/Users/ilya/Desktop/node/index.js'
const textFilePath = '/Users/ilya/Desktop/file.txt'
const relativePath = './node/index.js'
const directoryPath = './node/subfolder'

console.log(path.isAbsolute(filePath)) // true
console.log(path.isAbsolute(relativePath)) // false

console.log(path.basename(filePath)) // index.js
console.log(path.basename(directoryPath)) // subfolder

console.log(path.dirname(filePath)) // /Users/ilya/Desktop/node
console.log(path.dirname(directoryPath)) // ./node

console.log(path.resolve(relativePath)) // /Users/ilya/working-space/study-udemy/nodejs/07-module-path/node/index.js

console.log(path.extname(textFilePath)) // .txt

console.log(path.parse(filePath)) // { ...parsePath }

const parse = path.parse(filePath)

console.log(path.join(parse.dir, `rename-${parse.name}.mjs`)) // /Users/ilya/Desktop/node/rename-index.mjs

