// count the no of vowles and consonant

function countVowel(str){
let vowelcount=0;
let consonantCount=0;
for(let i=0;i<str.length;i++){
    if(str[i]==='a'||str[i]==='e' ||str[i]==='i'||str[i]==='o'||str[i]==='u'){
        vowelcount++
    }
    else{
        consonantCount++
    }
}
return vowelcount
}
console.log(countVowel('khushboo'))