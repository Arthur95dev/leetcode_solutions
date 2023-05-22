var reverse = function(x) {
    let result = +String(Math.abs(x)).split('').reverse().join('')
    if (result > Math.pow(2, 31) - 1) return 0
    return x > 0 ? result : -result
}
