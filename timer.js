function finding(arr){
  let lower=Math.min(...arr)
  let upper=Math.max(...arr)
  let sumArr=[]
  let uniqueObj={}
 for(let i=lower;i<=upper;i++){
    let sumOfI=String(i).split('')
     let sum=0
     for(let el of sumOfI){
        let num=Number(el)
        sum+=num
        
     }
     sumArr.push(sum)
}

 for(let i=0;i<sumArr.length;i++){
    if(uniqueObj[sumArr[i]]){
        uniqueObj[sumArr[i]]++
    }
    else{
        uniqueObj[sumArr[i]]=1
    }
  }
  let maxx = Math.max(...Object.values(uniqueObj));
  return maxx
}
console.log(finding([5,15,7]))