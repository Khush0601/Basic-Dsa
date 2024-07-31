function quicksort(arr){
if(arr.length<2){
    return arr
}
let pivot=arr[arr.length-1]
let left=[]
let right=[]
for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    }
}
return [...quicksort(left),pivot,...quicksort(right)]
}
console.log(quicksort([8,20,-2,4,-6]))