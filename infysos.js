function longestUniqueSubstring(s) {
    let n = s.length;
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        let seen = [];
        for (let j = i; j < n; j++) {
            if (seen.includes(s[j])) {
                
                break;
            } else {
                seen.push(s[j]);
            }
        }
        
        if (seen.length > maxLength) {
            maxLength = seen.length;
        }
    }

    return maxLength;
}

// Example usage
let s1 = "text";
console.log(longestUniqueSubstring(s1)); 
let s2 = "infyinfosys";
console.log(longestUniqueSubstring(s2)); 


function wineTrading(houses) {
    let balance = 0;
    let work = 0;

    for (let i = 0; i < houses.length; i++) {
        balance += houses[i];
        work += Math.abs(balance);
    }

    return work;
}

// Example usage
const N = 5;
const A = [5, -4, 1, -3, 1];
console.log(wineTrading(A)); // Output: 9

// summer Array:
// INPUT
let P = 4;
let arr = [1, 2, 3, 4];

// FUNCTION TO FIND MINIMUM SWAPS
function summerArraySwaps(arr) {
    let n = arr.length;

    let swapsEvenFirst = 0;
    let swapsOddFirst = 0;

    let evenIndex = 0;
    let oddIndex = 0;

    // Case 1: Even numbers first
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            swapsEvenFirst += Math.abs(i - evenIndex);
            evenIndex++;
        }
    }

    // Case 2: Odd numbers first
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) {
            swapsOddFirst += Math.abs(i - oddIndex);
            oddIndex++;
        }
    }

    return Math.min(swapsEvenFirst, swapsOddFirst);
}

// OUTPUT
let result = summerArraySwaps(arr);
console.log("Minimum swaps:", result);

