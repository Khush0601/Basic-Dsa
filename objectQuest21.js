function mostFrequentChar(str){
    const freq={}
    for(let char of str){
        if(freq[char]){
            freq[char]++
        }
        else{
            freq[char]=1
        }
    }

    //find character with highest frequency

    let maxChar='';
    let maxCount=0;
    for(let char in freq){
        if(freq[char]>maxCount){
            maxCount=freq[char]
            maxChar=char
        }
    }
    return maxChar
}
console.log(mostFrequentChar("hello"));