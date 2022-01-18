const readline = require('readline');
const fs = require('fs')
const path = require('path');
const { textToMatrix, replaceWithRoutes, maxRoute } = require('./utils');
const { count } = require('console');


const countZeros = (matrix) => matrix.flat().filter(item => item === 0).length

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let document
document = fs.readFileSync(path.resolve("/Users/randygala/develop/personal/interviews/GrainChain/test-1.txt"), 'utf-8')

// rl.question('Path: ', function (p) {
//     document = fs.readFileSync(path.resolve("C:\Users\Randy Gala\Dropbox\Trabajo\Entrevistas\GrainChain\test-1.txt"), 'utf-8')
// });

let matrix = textToMatrix(document)
let routes = maxRoute(matrix)

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

            console.table(filledMatrix)
            console.log(countZeros(filledMatrix) + ' zeros on matrix')
            console.log('min founded')
            console.log(maxRoute)
        } else {
            return
        }
    })
    matrix = replaceWithRoutes(matrix, maxRoute.route)
    routes.splice(maxRoute.routeIndex, 1)
    console.log('end matrix')
    console.table(matrix)
    // console.log({route, zeros})
    // console.table(matrix)
}

// let routeIndex = 0

// while(countZeros(routed)){
//     let route = routes[0]

//     if(routes.length > 1) {
//         routes.forEach((r, index) => {
//             let filledMatrix = replaceWithRoutes(routed, r)
//             let max = countZeros(filledMatrix)
//             console.log(max)
//             if( countZeros(filledMatrix) > max){
//                 route = r
//                 routeIndex = index
//                 console.log(index)
//                 console.log({max, route})
//             }
//         })
//     }
//     console.log({route})
//     console.table(routed)
//     routed = replaceWithRoutes(routed, route)
//     routes = routes.splice(0, routeIndex)
// }




