// average of an array
// let a=[1,2,3,4,56,7,8]
// let sum=0
// function add(b){
//   for(let i=0;i<b.length;i++){
//     sum=sum+b[i]
//   }
// let Average=sum/b.length
//  return {sum,Average}
// }
// console.log((add(a)))

let arr=[[2,1],[4,1],[1,1]]

function avbb(a){
  
  return a.reduce((a,c)=>{
    return [...a,...c]
  },[])
}
console.log(avbb(arr))