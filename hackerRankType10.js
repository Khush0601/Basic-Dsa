//plus Minus

function findPlusMinus(arr){
 let positivecount=0;
 let negivecount=0;
 let zeroCount=0;
 for(let el of arr){
    if(el>0){
        positivecount++
    }
    else if(el<0){
        negivecount++
    }
    else{
        zeroCount++
    }
 }
 let positiveFraction=positivecount/arr.length
 let negativeFraction=negivecount/arr.length
 let zeroFraction=zeroCount/arr.length

 return {positiveFraction,negativeFraction,zeroFraction}
}
console.log(findPlusMinus([-4,3,-9,0,4,1]))