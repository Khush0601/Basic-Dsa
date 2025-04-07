function smallest(arr){
    // let min=arr[0];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]<min){
    //         min=arr[i]
    //     }
    // }
    // return min
    return Math.min(...arr)
}
console.log(smallest([2,3,5,1,9]))

