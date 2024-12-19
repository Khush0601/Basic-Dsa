// Electronic shop question
function buyItems(budget,keyboardArr,usbArr){
let sumArr=[]
let budgetArr=[]

let result;
for(let i=0;i<keyboardArr.length;i++){
    for(let j=0;j<usbArr.length;j++){
       let sum=keyboardArr[i]+usbArr[j]
       sumArr.push(sum)
    }
}
for(el of sumArr){
    if(el<=budget){
    budgetArr.push(el)
    result=Math.max(...budgetArr)
    }
    else{
        result=-1
    }
   
}

return result
}
console.log(buyItems([5],[4],[5]))

