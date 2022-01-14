const { countRightZeros, countLeftZeros } = require("../utils")


describe('count right zeros of ', () => {
    test('array with one first', () => {
        const result = countRightZeros([1, 1, 1, 0, 1, 0, 0, 0], 0)
        expect(result).toBe(-1)
    })
    test('array with zero first', () => {
        const result = countRightZeros([0, 1, 1, 0, 1, 0, 0, 0], 0)
        expect(result).toBe(0)
    })
    test('array starting in index 5 free of ones', () => {
        const result = countRightZeros([1, 1, 1, 0, 1, 0, 0, 0], 5)
        expect(result).toBe(2)
    })
    test('array starting in index 4 with 1 inmediately', () => {
        const result = countRightZeros([1, 1, 1, 0, 0, 0, 0, 1], 4)
        expect(result).toBe(2)
    })
    test('array with only zeros', () => {
        const result = countRightZeros([0, 0, 0, 0, 0, 0, 0, 0], 0)
        expect(result).toBe(7)
    })
    test('array starting in middle index', () => {
        const result = countRightZeros([0, 0, 0, 0, 0, 0, 0, 1, 0], 4)
        expect(result).toBe(2)
    })
    test('empity array', () => {
        const result = countRightZeros([], 1)
        expect(result).toBe(-1)
    })
})

describe('count left zeros of ', () => {
    test('array with one first', () => {
        const result = countLeftZeros([1, 1, 1, 0, 1, 0, 0, 0], 0)
        expect(result).toBe(-1)
    })
    test('array starting in zeros', () => {
        const result = countLeftZeros([0, 0, 1, 0, 1, 0, 0, 0], 1)
        expect(result).toBe(1)
    })
    test('array starting in index 4 in above one number', () => {
        const result = countLeftZeros([1, 1, 1, 0, 1, 0, 0, 0], 4)
        expect(result).toBe(-1)
    })
    test('array starting in index 3 with 1 zero', () => {
        const result = countLeftZeros([1, 1, 0, 0, 1, 0, 0, 0], 3)
        expect(result).toBe(1)
    })
    test('array with only zeros', () => {
        const result = countLeftZeros([0, 0, 0, 0, 0, 0, 0, 0], 7)
        expect(result).toBe(7)
    })
    test('par array starting in middle index', () => {
        const result = countLeftZeros([0, 0, 1, 0, 0, 0, 0, 0, 0], 5)
        expect(result).toBe(2)
    })
})