// function for updating all elements of an array
function updateArray(a){
    let b=a.map((el,i)=>{
        return el*2
    })
    return b
}
console.log(updateArray([1,2,3,4,5]))

//  if we want same digit on all position
let c=[1,2,3,4,5]
for(let i=0;i<c.length;i++){
c[i]=8
}
console.log(c)
// if we want other digit on other position 
let v=[1,2,3,4,5]
a[0]=7
a[1]=5
console.log(v)