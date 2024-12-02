//is palindrone or not
function isPalindrone(str){
 let isPalindrone=false;
 let arr=str.split('')
 let reversearr=[]
 for(let i=arr.length-1;i>=0;i--){
    reversearr.push(arr[i])
 }
 let reversedStr=reversearr.join('')
 if(str===reversedStr){
    isPalindrone=true
 }
 else{
    isPalindrone=false
 }
 return isPalindrone

}
console.log(isPalindrone('12111'))


