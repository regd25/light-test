const textToMatrix = (text = '') => text.split('\r\n').map(row => row.split('').map(item => Number(item)))

const replaceWithRoutes = (array, index, prev, next) => {
    for (let i = 0; i < array.length; i++) {
        if(i >= index - prev && i <= index + next) {
            array[i] = 1
        }
    }
    return array
}

const toRoutes = (matrix) => {
    let result = []
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++){
            const resultX = maxRoute(matrix[y], x)
            const resultY = maxRoute(matrix.map( item => item[x]), y)
            if(resultX && resultY) result.push({
                x: {
                    ...resultX,
                    index: x
                },
                y: {
                    ...resultY,
                    index: y
                },
                total: resultX.total + resultY.total
            })
        }
    }
    result = result.sort((a, b)=> {
        if(a.total < b.total) return 1
        if(a.total > b.total) return -1
        return 0
    })
    return result
}

const maxRoute = (array, init = 0) => {
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
    toRoutes,
    replaceWithRoutes
}