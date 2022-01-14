const { maxRoute } = require('../utils')

describe('max route of 0 in x axis array', () => {
    test('start index obove 1', () => {
        const result = maxRoute([1, 1, 1, 0, 1, 0, 0, 0], 0)
        expect(result).toBeNull()
    })
    test('start index equal to array length - 1', () => {
        const result = maxRoute([0, 1, 1, 0, 1, 0, 0, 0], 7)
        expect(result).toMatchObject({
            prev: 2,
            next: 0,
            total: 2
        })
    })
    test('without length out of index', () => {
        const result = maxRoute([], 5)
        expect(result).toBeNull()
    })
    test('starting in index 4', () => {
        const result = maxRoute([1, 1, 1, 0, 0, 0, 0, 1], 4)
        expect(result).toMatchObject({
            prev: 1,
            next: 2,
            total: 3
        })
    })
    test('with only zeros starting in the middle', () => {
        const result = maxRoute([0, 0, 0, 0, 0, 0, 0, 0], 4)
        expect(result).toMatchObject({
            prev: 4,
            next: 3,
            total: 7
        })
    })
})