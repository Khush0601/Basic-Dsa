function square(a,b){
 let count=0
 
 for(let i=a;i<=b;i++){
    if(Number.isInteger(Math.sqrt(i))){
        count++
    }
    
 }
 return count

}
console.log(square(24,49))
// for bigger no it will not work 

function sq(c,d){
    let x=Math.ceil(Math.sqrt(c))
    let y=Math.floor(Math.sqrt(d))
    return y-x+1
}
console.log(sq(24,49))