function removeDuplicates(arr) {
    let uniqueArr = [];
    let removed=[]
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
      else{
        removed.push(arr[i])
      }
    }
    
    return {uniqueArr,removed};
  }
  
  console.log(removeDuplicates([1, 2, 3, 1, 2, 3, 4, 56, 7]));
  