var romanToInt = function(s) {
    let collection = new Map();
    collection.set('I', 1);
    collection.set('V', 5);
    collection.set('X', 10);
    collection.set('L', 50);
    collection.set('C', 100);
    collection.set('D', 500);
    collection.set('M', 1000);

    let symbols = s.split('');
    let result = 0;

    for (let i = 0; i < symbols.length; i++) {
        if (collection.get(symbols[i + 1]) > collection.get(symbols[i])) {
            result += collection.get(symbols[i + 1]) - collection.get(symbols[i])
            i++
        } else {
            result += collection.get(symbols[i])
        }
    }

    return result
};