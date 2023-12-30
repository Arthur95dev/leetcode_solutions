var letterCombinations = function(digits) {
    let map = new Map()
    map.set(2, ['a', 'b', 'c'])
    map.set(3, ['d', 'e', 'f'])
    map.set(4, ['g', 'h', 'i'])
    map.set(5, ['j', 'k', 'l'])
    map.set(6, ['m', 'n', 'o'])
    map.set(7, ['p', 'q', 'r', 's'])
    map.set(8, ['t', 'u', 'v'])
    map.set(9, ['w', 'x', 'y', 'z'])

    let nums = digits.split('').map(char => Number(char))

    let result = []

    for (let i = 0; i < nums.length; i++) {
        let numberChars = map.get(nums[i])
        let nextNumberChars = map.get(nums[i + 1])
        for (let j = 0; j < numberChars.length; j++) {
            for (let k = 0; k < nextNumberChars.length; k++) {
                result.push(numberChars[j] + nextNumberChars[k])
            }
        }
    }
    return result

};

for (let i = 0; i < 5; i++) {
    let arr = new Array(4).fill(i)
    for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            console.log(arr)
        }
    }
}