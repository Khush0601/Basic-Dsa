// day Of the programmer
function dayOfTheProgrammer(year){
    let result;
    let febDays;
  if(year===1918){
   return result='26.09.1918'
  }
  else{
    if((year<1918 && year%4===0)||(year>1918 && (year%400===0 ||(year%4===0 && year%100!==0)))){
      febDays=29;
    }
    else{
        febDays=28
    }
  }

  let arr=[31,febDays,31,30,31,30,31,31]
  let totalDays=256;
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  let sub=totalDays-sum
  return  result=`${sub}.09.${year}`
}
console.log(dayOfTheProgrammer(2016))