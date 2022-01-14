const readline = require('readline');
const fs = require('fs')
const path = require('path');
const { textToMatrix, toRoutes } = require('./utils');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let document
document = fs.readFileSync(path.resolve("C:/Users/Randy Gala/develop/interviews/light-test/test-2.txt"), 'utf-8')

// rl.question('Path: ', function (p) {
//     document = fs.readFileSync(path.resolve("C:\Users\Randy Gala\Dropbox\Trabajo\Entrevistas\GrainChain\test-1.txt"), 'utf-8')
// });

const matrix = textToMatrix(document)
console.log(matrix)
let routes = toRoutes(matrix)



console.log(routes)


