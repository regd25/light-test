const readline = require('readline');
const fs = require('fs')
const path = require('path');
const { textToMatrix, maxRoute } = require('./utils');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let document
document = fs.readFileSync(path.resolve("/Users/randygala/Dropbox/Trabajo/Entrevistas/GrainChain/test-1.txt"), 'utf-8')

// rl.question('Path: ', function (p) {
//     document = fs.readFileSync(path.resolve("C:\Users\Randy Gala\Dropbox\Trabajo\Entrevistas\GrainChain\test-1.txt"), 'utf-8')
// });

const matrix = textToMatrix(document)

let maxX = 0
let maxY = 0
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j){
        const result = maxRoute(matrix[j], i)

    }
}

console.log(max)


