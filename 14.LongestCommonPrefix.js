var longestCommonPrefix = function(strs) {
    let strsSortedArr = strs.sort((a, b) => a < b ? -1 : 1)
    let first = strsSortedArr[0];
    let last = strsSortedArr[strsSortedArr.length - 1]
    let result = ''

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            result+= first[i]
        } else break
    }
    return result
};
