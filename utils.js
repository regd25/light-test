const textToMatrix = (text = '') => text.split('\r\n').map(row => row.split('').map(item => Number(item)))

const replaceWithRoutes = (matrix, route) => {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
                const resultX = createRoute(matrix[y], x)
                const resultY = createRoute(matrix.map(item => item[x]), y)
                if (resultX && resultY) {
                    const inRouteX = x >= route.x.index - route.x.prev && x <= route.x.index + route.x.next
                    const inRouteY = y >= route.y.index - route.y.prev && y <= route.y.index + route.y.next
                    if (inRouteX && y === route.y.index) {
                        matrix[y][x] = 1
                        console.table(matrix)
                    }
                    if (inRouteY && x === route.x.index) {
                        matrix[y][x] = 1
                        console.table(matrix)
                    }
                }
            }
        }
    return matrix
}

const maxRoute = (matrix) => {
    let result = []
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const resultX = createRoute(matrix[y], x)
            const resultY = createRoute(matrix.map(item => item[x]), y)
            if (resultX && resultY) {
                const route = {
                    x: {
                        ...resultX,
                        index: x
                    },
                    y: {
                        ...resultY,
                        index: y
                    },
                    total: resultX.total + resultY.total
                }
                result.push(route)
            }
        }
    }
    result = result.sort((a, b) => {
        if (a.total < b.total) return 1
        if (a.total > b.total) return -1
        return 0
    })
    return result[0]
}

const createRoute = (array, init = 0) => {
    const next = countRightZeros(array, init)
    const prev = countLeftZeros(array, init)
    if (prev === -1 && next === -1) return null
    return {
        prev,
        next,
        total: next + prev
    }
}

const countRightZeros = (array, index = 0) => {
    if (!array.length) return -1
    const founded = array.indexOf(1, index)
    if (founded === index) return - 1
    if (founded === - 1) return array.length - 1 - index
    return founded - index - 1
}

const countLeftZeros = (array, index = 0) => {
    array = array.reverse()
    if (!array.length) return -1
    const founded = array.indexOf(1, array.length - 1 - index)
    array = array.reverse()
    if (founded === array.length - 1 - index) return -1
    if (founded === -1) return index
    return founded - (array.length - index)
}


module.exports = {
    textToMatrix,
    countLeftZeros,
    countRightZeros,
    maxRoute,
    maxRoute,
    replaceWithRoutes
}