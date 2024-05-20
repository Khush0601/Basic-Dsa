//add an el from back
// by using method
function addFromBack(arr){
    arr.push(8)
    return arr
   }
   console.log(addFromBack([1,2,3]))
   
   // without method
   function addBack(arr){
      let b=[...arr,8]
      return b
   }
   console.log(addBack([1,2,3]))
   
   //3rd
   function addBackEl(arr){
       let a=arr.concat(8)
       return a
   }
   console.log(addBackEl([1,2,3]))