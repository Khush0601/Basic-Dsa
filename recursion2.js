// print elements of array 


const print=(array,strt,newArr)=>{
if(array.length===strt){
   return newArr
}
newArr=[...newArr,array[strt]]
strt=strt+1
return print(array,strt,newArr)
}
console.log(print([1,2,3],0,[]))