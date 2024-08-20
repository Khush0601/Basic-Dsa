
let arr=['call','call','call','call','call']
function leet(ar,startIndex){
let count=startIndex
let newArray=[]
for(let i=0;i<ar.length;i++){
    newArray.push(count+i)
}
return newArray
}
console.log(leet(arr,-2))