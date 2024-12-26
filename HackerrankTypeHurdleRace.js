 function hurdleRace(k,arr){
  let result;
  for(let el of arr){
    if(el>k){
        result=Math.abs(el-k)
    }
    else{
        result=0
    }
  }
  return result
 }
 console.log(hurdleRace(4,[1,6,3,5,2]))

 //or
 function hurdle(k,array){
 let max=Math.max(...array)
 return max>k?Math.abs(max-k):0
 }
 console.log(hurdle(4,[1,6,3,5,2]))