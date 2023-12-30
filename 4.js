var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let result;
    if (mergedArray.length % 2 === 0) {
        result = (mergedArray[mergedArray.length / 2] + mergedArray[mergedArray.length / 2 - 1]) / 2
    } else {
        result = mergedArray[Math.trunc(mergedArray.length / 2)]
    }
    return result
};