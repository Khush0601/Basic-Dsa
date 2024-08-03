// write a program to fing string is good or not
let goodstring=false
function isGoodstring(string){
if(string[0]==='a' && string.length>3){
    goodstring=true
}
else{
    goodstring=false
}
return goodstring
}
console.log(isGoodstring('nnar'))

// to check whether the last digits of both are samr or not
let a='32'
let b='45555'

if(a[a.length-1]===b[b.length-1]){
    console.log('yes')
}
else{
    console.log('no') 
}

let n='    ji'
n.trim()
console.log(n)
