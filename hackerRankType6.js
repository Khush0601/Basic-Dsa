/**
 * find the repition of letter in a word 
 */

function findRepeat(str){
    const frequencyMap = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }
    return frequencyMap
}



console.log(findRepeat('ajgdhaajj'))