// given an array ,return a filtering array filteredArray
function filteringEl(arr){
let newArr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>10){
        newArr.push(arr[i])
    }
}
return newArr
}
console.log(filteringEl([2,5,7,10,67,56]))

// arrow fun
const filrt=(arr)=>{
    let a=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>10){
     a.push(arr[i])
    }
}
return a
}
console.log(filrt([20,5,7,10,67,56]))
