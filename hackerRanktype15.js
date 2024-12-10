//n=4
function print(n){
    let result='';
 for(let i=0;i<n;i++){
   
   for(let j=0;j<n-i-1;j++){
    result+=' '
   }
   for(let k=0;k<i+1;k++){
    result+='#'
   }
   result+='\n'
   
 }
 return result
 
}
console.log(print(8))