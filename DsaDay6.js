 // reverse a string
 
 let str='hii my name is khush'
let a=str.split(' ')
let strr=''
for(let i=a.length-1;i>=0;i--){
strr=strr+a[i]+' '
}
console.log(strr)