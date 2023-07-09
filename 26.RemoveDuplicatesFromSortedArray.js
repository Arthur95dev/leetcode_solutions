var removeDuplicates = function(nums) {
    let set = new Set(nums)
    let arr = Array.from(set)

    nums.length = arr.length

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
    return nums.length
}