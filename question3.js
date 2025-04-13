function freq(arr){
    let freq={}
    let non_repeating=[]
    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }
        else{
            freq[arr[i]]=1
        }
    }


    for(let key in freq){
        if(freq[key]===1){
           non_repeating.push(key)
        }
    }

    
    return non_repeating
}
console.log(freq([1,3,1,5,3,6]))