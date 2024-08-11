// // average find
function avg(a,b,c){
console.log((a+b+c)/3)
}
avg(2,3,4)



// average of array
function findAvg(arr){
    let sum=0
let average=0
for(let i=0;i<=arr.length;i++){
    
    sum=sum+i
}
 average=sum/arr.length
return average
}
console.log(findAvg([1,2]))

// print table of n
function giveTable(n){
   
for(let i=n;i<=n*10;i=i+n){
console.log(i)
}
}
giveTable(5)

// calculate sum from 1 to n

function calSum(n){
    let sum=0
 for(let i=1;i<=n;i++){
    sum=sum+i
 }
 return sum
}
console.log(calSum(100))

// concate the strings
let strr=["hi","hello","byy"]
function printConcate(str){
    let result='';
for(let i=0;i<str.length;i++){
result=result+str[i]
}
return result
}
console.log(printConcate(strr))

// lexical scope
function outerfun(){
    let x=7
    let y=8
    function inner(){
       console.log(x)
    }
    inner()
   
}
outerfun()

// hoisting
// in hoisting variables moved at the top of the function
function outerfun(){
   
    function inner(){
        console.log(x)
    }
    let x=7
    let y=8
    inner()
}
outerfun()

//question
let greet='hello' // global scope
function chnageGreet(){
    let greet='namste' // function scope
    console.log(greet)
    function innerGreet(){
        console.log(greet)// lexical scope
    }
}

chnageGreet()
console.log(greet)