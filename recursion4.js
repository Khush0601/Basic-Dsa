// sum of all array el
const sumArray=(array)=>{
if(array.length===0){
    return 0
}
let [firstValue,...rest]=array
return firstValue+sumArray(rest)
}
console.log(sumArray([3,2,5]))