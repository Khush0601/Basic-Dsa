 // you have given a string find the unique occurence of words
 
 function findUnique(str){
    let arr=str.split(' ')
    let unique=[...new Set(arr)]
   return unique
  }
  console.log(findUnique('You are so cute and cute and so cutey'))
  
  //new set return krta hai tmko usme se unique
  
  //2nd way
  
  function getUnique(str){
  let arr=str.split(' ')
  let newArr=[]
  for(let word of arr){
     if(!newArr.includes(word)){
       newArr.push(word)
     }
  }
  return newArr
  }
  console.log(getUnique('You are so cute and cute and  so cutey'))