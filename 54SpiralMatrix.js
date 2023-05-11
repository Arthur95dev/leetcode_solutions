'use strict'
//54. Spiral Matrix
var spiralOrder = function(matrix) {
    if (matrix[0].length === 1) {
        let result = []
        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i][0])
        }
        return result
    }

    let result = []

    let count = Math.ceil(matrix.length / 2)

    let localArr = matrix

    const firstStep = (arr) => {
        if (arr.length === 0) return
        let firstElems = arr.shift()
        localArr = arr
        result = [...result, ...firstElems]
    }

    const secondStep = (arr) => {
        if (arr.length === 0) return
        let secondElems = []
        for (let i = 0; i < arr.length - 1; i++) {
            if (!arr[i].length) break
            secondElems.push(arr[i].pop())
        }
        localArr = arr
        result = [...result, ...secondElems]
    }

    const thirdStep = (arr) => {
        if (arr.length === 0) return
        let thirdElems = arr.pop().reverse()
        localArr = arr
        result = [...result, ...thirdElems]
    }

    const fourthStep = (arr) => {
        if (arr.length === 0) return
        let fourthElems = []
        for (let i = arr.length - 1; i >= 0; i--) {
            if (!arr[i].length) break
            fourthElems.push(arr[i].shift())
        }
        localArr = arr
        result = [...result, ...fourthElems]
    }
    for (let i = 0; i < count; i++) {
        firstStep(localArr)
        secondStep(localArr)
        thirdStep(localArr)
        fourthStep(localArr)
    }
    return result
}
