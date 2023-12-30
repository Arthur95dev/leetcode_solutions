var diagonalSum = (mat) => {
    var result = 0;
    for (var i = 0; i < mat.length; i++) {
        result += mat[i][i];
        if (i !== mat.length - 1 - i) {
            result += mat[i][mat.length - 1 - i];
        }
    }
    return result;
};