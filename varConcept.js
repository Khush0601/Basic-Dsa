var a=1;

(function (){
 var a=2
 console.log('fun',a)
})()
console.log(a)

// 2nd ex
  
var c=3;

function hello(){
   var s=8;

}
hello()
console.log(s)

//3rd
function testVar() {
    var a = 10;
    console.log(a);
}
testVar();
console.log(a);// a is not defined because we cannot access var outside the function

//4th
{
    var x = 5;
    let y = 10;
}
console.log(x); // 5 because var can be accessed ouside the block because of function scope 
console.log(y); // cannot access outside the bliock
