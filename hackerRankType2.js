/**
 * You are given a list of user data in the form of an array of objects. Each object contains the following details about a user:
 * 1.Filter: Remove all users whose age is less than 18.
    2.Sort: Sort the remaining users in descending order of their score. If two users have the same score, sort them in ascending order of their names.
    3.Format: Return the list of filtered and sorted users in the following format:
    Each user should be represented as a string: "name (age) - score".
     Return the formatted strings in an array.
     user details:
     name (string): The name of the user.
     age (integer): The age of the user.
     score (integer): The score of the user.
 */

     const arrOfObj=[
        { "name": "Alice", "age": 25, "score": 85 },
        { "name": "Bob", "age": 17, "score": 90 },
        { "name": "Charlie", "age": 19, "score": 55 },
        { "name": "David", "age": 22, "score": 75 },
        { "name": "Daviduuuu", "age": 32, "score": 105 },
        { "name": "Davidooo", "age": 82, "score": 55 }
    ]
    
    function findAns(arr){
        let filteredArr=[]
        let restarr=[]
        
    for(let i=0;i<arr.length;i++){
        if(arr[i].age<18){
            filteredArr.push(arr[i])
        }
        if(!(arr[i].age<18)){
            restarr.push(arr[i])
            
        }
        //restArr :all above 18 age users
       }
       let descendingArr=restarr.sort((prev,curr)=>{
        if(prev.score>curr.score){
           return -1
        }
        if(prev.score<curr.score){
           return 1
        }
        if(prev.score===curr.score){
           return 0
        }
       })
       let newArr=descendingArr.map((el)=>`${el.name}(${el.age})-${el.score}`)
    return newArr
    }
    console.log(findAns(arrOfObj))
        