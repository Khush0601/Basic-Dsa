// function expression: we r storing function in another variable

// const sum=function(a,b){
//     console.log(a+b)
// }
// sum(7,8)

//higher Order function
function callbackFunction(){
    console.log('callback')
}
function higherorder(func){
    console.log('higher')
func()
}
higherorder(callbackFunction)


// Ex of Hof:map
let data=[1,2,3,4]
let result=data.map((el)=>{
    return  el*10
})
console.log(result)
