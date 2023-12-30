var maxArea = function(height) {
    let result = 0;
    let swap = 0;
    i = 0;
    j = height.length - 1
    while (i < j) {
        swap = Math.min(height[i], height[j]) * (j - i)
        if (swap > result) result = swap
        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }
    return result
};