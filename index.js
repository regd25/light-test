const readline = require('readline');
const fs = require('fs')
const path = require('path');
const { textToMatrix, replaceWithRoutes, maxRoute } = require('./utils');


const countZeros = (matrix) => matrix.flat().filter(item => item === 0).length

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
let routed = matrix
const t0 = performance.now();

while(countZeros(routed)){
    let routes = maxRoute(routed)
    let route = routes[0]
    if(routes.length > 1) {
        let max = countZeros(routed)
        routes.forEach(r => {
            let filledMatrix = replaceWithRoutes(routed, r)
            if( countZeros(filledMatrix) > max){
                route = r
            }
        })
    }
    console.log({route})
    routed = replaceWithRoutes(routed, route)
    console.table(routed)
}
const t1 = performance.now();
console.log(`${t1 - t0} milliseconds.`);



