// updating array el
// without map method
function updatingEl(arr){
    let b=[]
   for(let i=0;i<arr.length;i++){
    b[i]=arr[i]*5
   }
   return b
  }
  console.log(updatingEl([1,2,3,4,5]))
  
  // by map method
  function updatingArrayEl(arr){
    let aa=arr.map((el,i)=>{
      return el*5
    })
    return aa
  }
  console.log(updatingArrayEl([1,2,3,4,5]))