const readline = require('readline');
const fs = require('fs')
const path = require('path');
const { textToMatrix, replaceWithRoutes, maxRoute } = require('./utils');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let document
document = fs.readFileSync(path.resolve("/Users/randygala/develop/personal/interviews/GrainChain/test-3.txt"), 'utf-8')

// rl.question('Path: ', function (p) {
//     document = fs.readFileSync(path.resolve("C:\Users\Randy Gala\Dropbox\Trabajo\Entrevistas\GrainChain\test-1.txt"), 'utf-8')
// });

const matrix = textToMatrix(document)
while(matrix.flat().filter(item => item === 0).length){
    let route = maxRoute(matrix)
    let routed = replaceWithRoutes(matrix, route)
    console.log(route)
}



