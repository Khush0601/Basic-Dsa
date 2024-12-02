// to count the frequency of each letter in a string
function countFrequency(str){
    let obj={}
    let strLowerCase=str.toLowerCase()
     
    for(let i=0;i<str.length;i++){
       let char=str[i]
       if(obj[char]){
        obj[char]++
    }
    else{
        obj[char]=1
    }
    }
    return obj
}
console.log(countFrequency('hellooooyyytttrrrefggg'))
// alternative way
function countFrequencyy(str){
    let count=1
    for(word of str){
        if(obj[word]){
            obj[word]=count++
        }
        else{
            obj[word]=count
        }
    }  
}
console.log(countFrequency('shanusingh'))
