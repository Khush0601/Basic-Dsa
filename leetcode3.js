
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