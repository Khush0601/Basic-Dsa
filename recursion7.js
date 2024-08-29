// tower of coins
function moves(n,s,d,a){
    if(n===1){
        return 1
    }
    return moves(n-1,s,a,d)+1+moves(n-1,a,d,s)
}
console.log(moves(4,'s','d','a'))


