//Cat and Mouse
function findCat(x,y,z){
    let result;
let catA=Math.abs(x-z)
let catB=Math.abs(y-z)
if(catA<catB){
   result= 'Cat A'
}
if(catB<catA){
     result='Cat B'
}
if(catA===catB){
     result= 'Mouse C'
}
return result
}
console.log(findCat(2,5,4))