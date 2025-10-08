function solve(arr) {
    let bestSubArr = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = [];
        for (let j = 0; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= 1) {
                temp.push(arr[j]);
            }
        }
        // keep the longest one
        if (temp.length > bestSubArr.length) {
            bestSubArr = temp;
        }
    }

    return bestSubArr;
}

console.log(solve([4, 6, 5, 3, 3, 1])); // [4, 5, 3] or [3, 3, 4] etc.
console.log(solve([1, 2, 2, 3, 1, 2])); // [1, 2, 2, 1, 2]
