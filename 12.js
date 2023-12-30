var intToRoman = function(num) {
    let map = new Map()
    map.set(1, 'I');
    map.set(2, 'II');
    map.set(3, 'III');
    map.set(4, 'IV');
    map.set(5, 'V');
    map.set(6, 'VI');
    map.set(7, 'VII');
    map.set(8, 'VIII');
    map.set(9, 'IX');
    map.set(10, 'X');
    map.set(20, 'XX');
    map.set(30, 'XXX');
    map.set(40, 'XL');
    map.set(50, 'L');
    map.set(60, 'LX');
    map.set(70, 'LXX');
    map.set(80, 'LXXX');
    map.set(90, 'XC');
    map.set(100, 'C');
    map.set(200, 'CC');
    map.set(300, 'CCC');
    map.set(400, 'CD');
    map.set(500, 'D');
    map.set(600, 'DC');
    map.set(700, 'DCC');
    map.set(800, 'DCCC');
    map.set(900, 'CM');
    map.set(1000, 'M');
    map.set(2000, 'MM');
    map.set(3000, 'MMM');
    
    let result = String(num).split('').reverse().map((item, index) => item * Math.pow(10, index)).reverse();

    result = result.map(num => map.get(num))
    return result.join('')
    
};