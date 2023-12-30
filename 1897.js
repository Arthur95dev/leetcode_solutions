var makeEqual = (words) => {
    var chars = words.reduce((acc, str) => acc + str, '');
    var map = new Map();
    for (var i = 0; i < chars.length; i++) {
        if (map.has(chars[i])) {
            map.set(chars[i], map.get(chars[i]) + 1);
        } else {
            map.set(chars[i], 1);
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) < words.length || map.get(key) % words.length !== 0) return false;
    }
    return true;
};

