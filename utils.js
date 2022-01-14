const textToMatrix = (text = '') => text.split('\r\n').map(row => row.split('').map(item => Number(item)))

const maxRoute = (array, init = 0) => {
    const next = countRightZeros(array, init)
    const prev = countLeftZeros(array, init)

    if(prev === -1 && next === -1) {
        return null
    }
    return {
        prev,
        next,
        total: next + prev
    }
}

const countRightZeros = (array, index = 0) => {
    if(!array.length) return -1
    const founded = array.indexOf(1, index)
    if(founded === index) return - 1
    if(founded === - 1) return array.length - 1 - index
    return founded - index - 1
}

const countLeftZeros = (array, index = 0) => {
    array = array.reverse()
    if(!array.length) return -1
    const founded = array.indexOf(1, array.length - 1 - index )
    if(founded === array.length - 1 - index) return -1
    if(founded === -1) return index
    return founded - (array.length - index)
}


module.exports = {
    textToMatrix,
    maxRoute,
    countLeftZeros,
    countRightZeros
}