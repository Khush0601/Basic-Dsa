function cutTheSticks(arr) {
    arr.sort((a, b) => a - b); 
    let result = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) { 
            result.push(n - i);
        }
    }
    return result;
   
 
}
console.log(cutTheSticks([5,4,4,2,2,8]))

