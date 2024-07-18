 // question on binararySearch
 let data=[5,9,13,17]
let findIndexOf=13
let start=0
let end=data.length-1
let position=undefined;
while(start<=end){
    let midPosition=Math.floor((start+end)/2)
    if(data[midPosition]===findIndexOf){
        position=midPosition
        break;
    }
    else if(data[midPosition]>findIndexOf){
        end=midPosition-1
    }
    else{
        start=midPosition+1
    }
  
}
console.log(position)