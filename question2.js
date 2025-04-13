function secondSmallest(arr){
    arr.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        else{
            return 0
        }
    })
    
    return `second smallest :${arr[1]} 
     second largest:${arr.length-1}`
}
console.log(secondSmallest([55,3,45,8,6]))