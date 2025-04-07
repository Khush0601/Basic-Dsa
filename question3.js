function freq(arr){
    let freq={}
    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }
        else{
            freq[arr[i]]=1
        }
    }
    return freq
}
console.log(freq([1,3,1,5,3,6]))