let a=[1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
function designerPdf(h,word){
   
    let maxHeight = 0;
    let index;
    for (let char of word) {
         index = char.charCodeAt(0) - 97; // Get the position of the character
        maxHeight = Math.max(maxHeight, h[index]); 
    }

   
    return maxHeight * word.length;
}
console.log(designerPdf(a,'abc'))

// index of every letter of a word
let str='avsz'

for(let i=0;i<str.length;i++){
   let index=str[i].charCodeAt(0)-96
     max=Math.max(a[index])
    
   }
  

