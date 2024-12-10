// You are in charge of the cake for a child's birthday. You have decided the 
// cake will have one candle for each year of their total age. They will only be
//  able to blow out the tallest of the candles. Count how many candles are tallest.
// Example
// The maximum height candles are  units high. There are  of them, so return .


function candles(arr){
let tall=arr[0]
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>tall){
        tall=arr[i]
    }
}
 
for(let el of arr){
    if(el===tall){
     count++
    }
}
return count

}
console.log(candles([3,2,1,3,3,2,3]))