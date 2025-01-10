function circularArrayRotation(a, k, queries) {
    let result=[]
   for(let i=0;i<k;i++){
   let removed=a.pop()
    a.unshift(removed)
    
   }
   for(let el of queries){
     result.push(a[el])

     
   }
   return result

}
console.log(circularArrayRotation([1,2,3],2,[0,1,2]))