//map
let nums=[3,5,2,7]
nums=nums.map((el)=>{
    return el*2
})
console.log(nums)


// filter
let num=[3,5,2,7,6,4,10]
let newArr=num.filter((el)=>{
   if(el===2){
    return true
   }
   if(el%2===0){
    return true
   }
})
console.log(newArr)
