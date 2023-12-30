var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0

    let result = 1;
    let acc = 1;

    for (let i = 0; i < s.length; i++) {
        acc = 1
        for (let j = i + 1; j < s.length; j++) {
            if (!s.slice(i, j).includes(s[j])) {
                acc++
                acc > result ? result = acc : acc
            } else {
                break
            }
        }
    }

    return result
};