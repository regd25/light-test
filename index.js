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
rl.question('Path: ', function (p) {
    document = fs.readFileSync(path.resolve(p), 'utf-8')
    let matrix = textToMatrix(document)
    let routes = maxRoute(matrix)
    let count = 0
    while (countZeros(matrix)) {
        let maxRoute = {
            route: {},
            routeIndex: 0,
            zeros: countZeros(matrix)
        }
        let filledMatrix = matrix
        routes.forEach((r, i) => {
            filledMatrix = replaceWithRoutes(matrix, r)
            if (countZeros(filledMatrix) < maxRoute.zeros) {
                maxRoute.zeros = countZeros(filledMatrix)
                maxRoute.route = r
            } else {
                return
            }
        })
        matrix = replaceWithRoutes(matrix, maxRoute.route)
        routes.splice(maxRoute.routeIndex, 1)
        count += 1
    }
    console.table(matrix)
    console.log(`${count} luces colocadas`)
});




