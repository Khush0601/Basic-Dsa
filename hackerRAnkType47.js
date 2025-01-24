function jumpingOnClouds(c, k) {
    let e=100;
for(let i=0;i<c.length;i+=k){
    if(c[i]===1){
        e=e-1-2
    }
    else{
        e=e-1
    }
}

return e

}
console.log(jumpingOnClouds([1 ,1 ,1, 0 ,1 ,1, 0, 0 ,0 ,0],3))

