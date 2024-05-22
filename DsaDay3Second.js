// to fetch even no. from array
 
function seperating(arr){
    let even=[]
    let index=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
           even[index]=arr[i]
           index=index+1
     }
      
    }
    return even
    }
    console.log(seperating([1,2,3,4,5,6,7,8]))