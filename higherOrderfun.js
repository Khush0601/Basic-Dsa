//higher Order function
function callbackFunction(){
    console.log('callback')
}
function higherorder(func){
    console.log('higher')
func()
}
higherorder(callbackFunction)


// Ex of Hof:map :if in interview asked then show this
let data=[1,2,3,4]
let result=data.map((el)=>{
    return  el*10
})
console.log(result)

// how hof came
const summ=(array)=>{
    const onlyNumbers=array.map((el)=>parseInt(el))
    return onlyNumbers.reduce((a,b)=>a+b)
}
console.log(summ(['3','3',4]))

const mull=(array)=>{
    const onlyNumbers=array.map((el)=>parseInt(el))
    return onlyNumbers.reduce((a,b)=>a*b,1)
}
console.log(mull(['3','3',4]))
// here we can see that the same logic used in both function at one place so 
// we shouild make something that we should not write again the same thing twice
// done by hof

const getSenitized=(array,callback)=>{
    const onlyNumbers=array.map((el)=>parseInt(el))// logic is written in hof fun at once 
    return callback(onlyNumbers)
}
const sum=(array)=>{
return array.reduce((a,b)=>a+b)
}
const mul=(array)=>{
    return array.reduce((a,b)=>a*b,1)
}
console.log(getSenitized(['3','3',4],sum))

// map using hof
const myMap=(arr,callback)=>{
    let array=[]
for(let i=0;i<arr.length;i++){
   array.push(callback(arr[i]))
}
return array
}

const doubleMe=(el)=>{
  return el*2
}
console.log(myMap([1,2,3,4],doubleMe))

// example of hof
const calculator=(num1,num2,callback)=>{
    let result=undefined
result=callback(num1,num2)
return result
}
const add=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}

const mult=(a,b)=>{
    return a*b
}
const div=(a,b)=>{
    return a/b
}
console.log(calculator(5,6,mult))

//foreach
const foreachFun=(arr,callback)=>{
   
for(let i=0;i<arr.length;i++){
    return callback(arr[i])
}
}

const callBackfun=(val)=>{
 return val
}
console.log(foreachFun([1,2,3,4],callBackfun))