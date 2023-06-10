var isMatch = function(s, p) {
    if (!p) return !s

    let currentCharCheck = Boolean(s) && (s[0] === p[0] || p[0] === '.')
    
    if (p[1] === '*') {
        return (isMatch(s, p.slice(2)) || currentCharCheck && isMatch(s.slice(1), p))
    }

    return currentCharCheck ? isMatch(s.slice(1), p.slice(1)) : false
};