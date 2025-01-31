function appendAndDelete(s,t,k){
  let commonLength=0;
  for(let i=0;i<Math.min(s.length,t.length);i++){
    if(s[i]===t[i]){
        commonLength++
    }
    else{
        break
    }
  }
  let deletion=s.length-commonLength;
  let addition=t.length-commonLength;
  let totalCount=deletion+addition
  if (k >= s.length + t.length || (k >= totalCount && (k - totalCount) % 2 === 0)) {
    return 'YES'
  }
  else{
    return 'NO'
  }

}
console.log(appendAndDelete('hackerhappy','hackerrank',8))