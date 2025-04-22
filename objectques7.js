//find most frequent value:

const obj={
    user1:'apple',
    user2:'banana',
    user3:'apple',
    user4:'orange',
    user5:'apple'
}

function mostFrequent(obj){
    const freq={};
    //count the freq:
    for(let key in obj){
        
        freq[obj[key]]=freq[obj[key]]+1||1;
    }
    let maxCount=0;
    let mostFreq=null;
    for(let value in freq){
        if(freq[value]>maxCount){
            maxCount=freq[value];
            mostFreq=value;
        }
    }
    return mostFreq
}
console.log(mostFrequent(obj))