// tower of coins
function moves(n,s,d,a){
    if(n===1){
        return 1
    }
    return moves(n-1,s,a,d)+1+moves(n-1,a,d,s)
}
console.log(moves(4,'s','d','a'))

// 
let arr=['call','call','call','call','call']
function leet(ar,startIndex){
let count=startIndex
let newArray=[]
for(let i=0;i<ar.length;i++){
    newArray.push(count++)
}
return newArray
}
console.log(leet(arr,-2))