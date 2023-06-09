var myAtoi = function(s) {
    let result = parseInt(s)
    if (isNaN(result)) return 0
    if (result >= Math.pow(2, 31)) return Math.pow(2, 31) - 1
    if (result < -Math.pow(2, 31)) return (-Math.pow(2, 31))
    return result
};
