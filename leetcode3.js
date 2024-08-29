// write a function createcounter ,it accepts a value init and it returns a object with three functions
// leetcode 3 question
const createCounter=(init)=>{
    let num=init
   
return {
    increment:()=>{
      return init+1
    },
    decrement:()=>{
     return num-1
    },
    reset:()=>{
    return num
    }

}
}
console.log(createCounter(5).increment())