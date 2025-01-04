function longestSubarrayWithDistinctElements(arr) {
    let start = 0; // Start of the current subarray
    let maxLength = 0; // Length of the longest subarray
    let seen = new Map(); // Map to store the last seen index of each element

    for (let end = 0; end < arr.length; end++) {
        // If the current element is already in the map and within the current subarray
        if (seen.has(arr[end]) && seen.get(arr[end]) >= start) {
            start = seen.get(arr[end]) + 1; // Move the start pointer
        }

        // Update the last seen index of the current element
        seen.set(arr[end], end);

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
console.log(longestSubarrayWithDistinctElements([1, 2, 3, 1, 4, 5, 3])); // 4
console.log(longestSubarrayWithDistinctElements([1, 2, 2, 3, 4, 5])); // 4
console.log(longestSubarrayWithDistinctElements([1, 1, 1, 1])); // 1
