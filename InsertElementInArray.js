let arr=[1,2,3,6,8,5,90,45]
let onWhichPostion=6
let el=9;
let otherEl;
for(let i=0;i<arr.length;i++){
    if(i===onWhichPostion){
       
        let otherEl=arr[i]
        arr[i]=el
      arr[i+1]=otherEl
    
      }

}
console.log(arr)
