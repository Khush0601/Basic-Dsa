function mergeSort(arr){
    // base condition
if(arr.length<2){
    return arr
}
// logic
const mid=Math.floor(arr.length/2)
const leftArray=arr.slice(0,mid)
const rightArray=arr.slice(mid)
// recursive call
return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
    const sortedArray=[]
    while(leftArray.length && rightArray.length){
     if(leftArray[0]<=rightArray[0]){
        sortedArray.push(leftArray.shift())
     }
     else{
        sortedArray.push(rightArray.shift())
     }
    }
    return [...sortedArray,...leftArray,...rightArray]
}
console.log(mergeSort([8,20,-2,4,-6]))