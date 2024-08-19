// reduce
// sum by reduce method
let b=[1,2,3,4,5]
let finalVal=b.reduce((prev,curr)=>{
   
    return prev+curr
})
console.log(finalVal)

//find max by loop

let a=[1,5,7,33,9,10,4,23]
let max=a[0]
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i]
    }
}
console.log(max)

// find max by reduce method
let arr=[1,5,7,33,9,10,4,23]
let result=arr.reduce((prev,curr)=>{
    if(prev<curr){
        return curr
    }
    else{
        return prev
    }
})
console.log(result)

// find min
let array=[5,7,33,9,10,1,4,23]
let res=array.reduce((prev,curr)=>{
    if(prev<curr){
        return prev
    }
    else{
        return curr
    }
})
console.log(res)
// every method:
let ar=[5,7,33,9,10,1,4,23]
let newA=ar.every((el)=>el%2===0)
console.log(newA)