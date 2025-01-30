// write js code that takes a positive integer as input and finds the largest digit in that number
function findlargest(num){
 let str=String(num)
 let arr=str.split('')
//  arr.sort((a,b)=>b-a)
let largest=Math.max(...arr)
 return largest
}
console.log(findlargest(1232456743))