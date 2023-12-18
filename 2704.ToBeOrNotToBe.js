var expect = (val) => {
    return {
        toBe: function(equalVal) {
            if (val === equalVal) return true;
            throw new Error('Not Equal');
        },
        notToBe: function(equalVal) {
            if (val !== equalVal) return true;
            throw new Error('Equal');
        }
    }
};