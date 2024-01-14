var halvesAreAlike = (s) => {
    if (s.length % 2 !== 0) return false;
    var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    var middleIndex = Math.trunc(s.length / 2);
    var firstHalf = 0;
    var secondHalf = 0;

    for (let i = 0; i < middleIndex; i++) {
        if (arr.includes(s[i])) firstHalf++;
        if (arr.includes(s[middleIndex + i])) secondHalf++;
    }
    return firstHalf === secondHalf;
};
