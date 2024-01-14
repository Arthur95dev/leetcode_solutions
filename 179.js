'use strict'

var largestNumber = (nums) => {
    var result = nums.sort((a, b) => (''+a+b) > (''+b+a) ? -1 : 1).join('');
    return +result === 0 ? "0" : result;
}