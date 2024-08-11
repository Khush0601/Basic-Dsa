// function expression: we r storing function in another variable

const sum=function(a,b){
    console.log(a+b)
}
sum(7,8)



// method :actions performed on object
const calculator={
    add:function(a,b){
    return a+b
    },
    subtract:function(a,b){
        return a-b
        },
     mul:function(a,b){
            return a*b
         }
}
console.log(calculator.add(5,6))

// to know typeof all datatypes
let arr=[1,2,3]
let obj={
    name:"khush",
    age:12
}
let add=function(){
   return 5+6
}
let a=undefined
let b=null
let c=NaN
console.log(typeof arr)
console.log(typeof obj)
console.log(typeof add)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// to convert string into number
let aa='12'
let bb=parseInt(aa)
let cc=Number(aa)
let dd=+aa
// three ways to convert string into number
console.log(typeof cc)



