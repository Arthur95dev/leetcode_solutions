'use strict'
var addTwoNumbers = function(l1, l2) {
    let sumArr, firstNum, secondNum;
    
    function nodeParce(nodeList) {
        let arr = [];
    
        function parce(node) {
            for (let key in node) {
                if (key === 'val') {
                    arr.push(node[key])
                } else {
                    if (node.next) parce(node.next)
                }
            }
        }
        parce(nodeList)
        return arr
    }

    firstNum = nodeParce(l1).reverse().join('')
    secondNum = nodeParce(l2).reverse().join('')
    
    if (firstNum.length >= 16 && Number(firstNum) > Number.MAX_SAFE_INTEGER || secondNum.length >= 16 && Number(secondNum) > Number.MAX_SAFE_INTEGER) {
        firstNum = BigInt(firstNum)
        secondNum = BigInt(secondNum)
    } else {
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)
    }

    sumArr = String(firstNum + secondNum).split('').reverse()

    sumArr = sumArr.map(num => {
        return {val: +num}
    })

    for (let i = 0 ; i < sumArr.length; i++) {
        if (i === sumArr.length - 1) {
            sumArr[i].next = null
        } else {
            sumArr[i].next = sumArr[i + 1]
        }
    }
    let result = sumArr[0]

    return result
};