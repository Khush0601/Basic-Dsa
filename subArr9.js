//find the first subArr of length k
function firstSubArr(arr, k) {
    let subArr = [];
    let message = 'k is too big';

    if (k > arr.length) {
        return message; // stop the function here
    }

    for (let i = 0; i < k; i++) {
        subArr.push(arr[i]);
    }

    return subArr;
}

console.log(firstSubArr([1, 2, 3, 4, 5], 9));  // Output: "k is too big"
