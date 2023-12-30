//This algorithm is correct but long
/*
var longestPalindrome = function(s) {
    if (s.length === 1) return s
    let result = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let subStr = s.slice(i, j + 1)
            if (subStr === [...subStr].reverse().join('')) {
                result.length < subStr.length ? result = subStr : result
            }
        }
    }
    return result
};
*/

var longestPalindrome = function(s) {
    let start = 0
    let finish = 0

    for (let i = 0; i < s.length; i++) {
        let len1 = maxLengthPalFromCenter(s, i, i)
        let len2 = maxLengthPalFromCenter(s, i, i + 1)
        let length = Math.max(len1, len2)

        if (length > finish - start) {
            start = Math.ceil(i - (length - 1) / 2)
            finish = Math.floor(i + length / 2)
        }
    }

    function maxLengthPalFromCenter(str, LIndex, RIndex) {
        
        while (LIndex >=0 && RIndex < str.length && s[LIndex] === s[RIndex]) {
            LIndex--
            RIndex++
        }
        
        return RIndex - LIndex - 1
    }

    return s.slice(start, finish + 1)
}