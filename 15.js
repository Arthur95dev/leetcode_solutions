/*
var threeSum = function(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let acc = [nums[i]]
        for (let j = i + 1; j < nums.length; j++) {
            acc = [nums[i], nums[j]]
            for (let k = j + 1; k < nums.length; k++) {
                if (acc[0] + acc[1] + nums[k] === 0) {
                    acc = [nums[i], nums[j], nums[k]]
                    result.push(acc)

                }
            }
        }
    }
    result = result.map(arr => arr.sort((a, b) => a - b))
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].join('') === result[j].join('')) {
                result.splice(j, 1)
                j--
            }
        }
    }
    return result
};

var threeSum = function(nums) {
    let result = []
    let strResult = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        let acc = [nums[i]]
        for (let j = i + 1; j < nums.length - 1; j++) {
            acc = [nums[i], nums[j]]
            for (let k = j + 1; k < nums.length; k++) {
                if (acc[0] + acc[1] + nums[k] === 0) {
                    acc = [nums[i], nums[j], nums[k]]
                    let strAcc = acc.sort((a, b) => a - b).join('')
                    if (!strResult.includes(strAcc)) {
                        result.push(acc)
                        strResult.push(strAcc)
                    }
                    break
                }
            }
        }
    }
    return result
};
*/
var threeSum = function(nums) {
    let result = []
    let strSums = new Set()

    nums.sort((a, b) => a - b)
    let j, k, sum;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break
 
        j = i + 1
        k = nums.length - 1
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                let acc = [nums[i], nums[j], nums[k]]
                if (!strSums.has(acc.join(''))) {
                    result.push(acc)
                    strSums.add(acc.join(''))
                }
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--
                j++
                k--
            }

            if (sum < 0) j++
            if (sum > 0) k--
        }
    }
    return result
};
